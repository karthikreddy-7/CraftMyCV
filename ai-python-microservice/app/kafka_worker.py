# app/kafka_worker.py
import os
import json
import logging
from confluent_kafka import Consumer, Producer, KafkaError
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
from .llm import generate_resume_from_profile

log = logging.getLogger(__name__)

KAFKA_BOOTSTRAP = os.getenv("KAFKA_BOOTSTRAP_SERVERS", "localhost:9092")
REQ_TOPIC = os.getenv("KAFKA_REQUEST_TOPIC", "resume-generation-requests")
RESP_TOPIC = os.getenv("KAFKA_RESPONSE_TOPIC", "resume-generation-results")
GROUP = os.getenv("KAFKA_CONSUMER_GROUP", "craftmycv-python-consumer")

consumer_conf = {
    'bootstrap.servers': KAFKA_BOOTSTRAP,
    'group.id': GROUP,
    'auto.offset.reset': 'earliest',
    'enable.auto.commit': False,
}

producer_conf = {
    'bootstrap.servers': KAFKA_BOOTSTRAP
}

def create_consumer():
    return Consumer(consumer_conf)

def create_producer():
    return Producer(producer_conf)

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=1, max=10))
def produce_result(producer: Producer, key: str, value: dict):
    payload = json.dumps(value).encode('utf-8')
    # blocking produce with delivery callback
    delivered = False

    def delivery(err, msg):
        nonlocal delivered
        if err:
            log.error("Delivery failed: %s", err)
        else:
            delivered = True
            log.info("Delivered message to %s [%s] at offset %s", msg.topic(), msg.partition(), msg.offset())

    producer.produce(RESP_TOPIC, key=key, value=payload, callback=delivery)
    producer.flush(10)

def handle_message(message):
    print(message)
    resume_id = message.get("resumeId")
    user_profile = message.get("userProfile", {})
    job_desc = message.get("jobDescription", "")
    metadata = message.get("metadata", {})

    log.info("Processing resumeId=%s user=%s", resume_id, user_profile.get("email") or user_profile.get("id"))

    # Call the LLM / AI
    try:
        result = generate_resume_from_profile(user_profile, job_desc, metadata)
        response = {
            "resumeId": resume_id,
            "status": "SUCCESS",
            "generatedHtml": result["html"],
            "generatedText": result.get("text_summary"),
            "meta": result.get("meta")
        }
    except Exception as e:
        log.exception("LLM generation failed for %s", resume_id)
        response = {
            "resumeId": resume_id,
            "status": "FAILED",
            "error": str(e)
        }
    return response

def run_consumer():
    consumer = create_consumer()
    producer = create_producer()
    consumer.subscribe([REQ_TOPIC])
    log.info("Subscribed to topic %s", REQ_TOPIC)

    try:
        while True:
            msg = consumer.poll(1.0)
            if msg is None:
                continue
            if msg.error():
                if msg.error().code() == KafkaError._PARTITION_EOF:
                    continue
                else:
                    log.error("Consumer error: %s", msg.error())
                    continue

            try:
                payload = msg.value().decode('utf-8')
                data = json.loads(payload)
            except Exception:
                log.exception("Failed to decode incoming message: %s", msg.value())
                consumer.commit(message=msg)
                continue

            # Handle message
            print(data)
            response = handle_message(data)
            # Produce response with same key resumeId
            try:
                produce_result(producer, key=response.get("resumeId"), value=response)
            except Exception:
                log.exception("Failed to produce response for %s", response.get("resumeId"))

            # commit offset after processing
            consumer.commit(message=msg)

    except KeyboardInterrupt:
        log.info("Stopping consumer")
    finally:
        consumer.close()
