package com.karthik.resume.backend.util;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaMessageConsumer {
    @KafkaListener(topics = "quickstart-events", groupId = "craftmycv")
    public void listen(String message) {
        System.out.println("Received message from kafka: " + message);
    }
}
