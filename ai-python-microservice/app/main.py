# app/main.py
import logging
import os
import asyncio
from fastapi import FastAPI
from .kafka_worker import run_consumer
from concurrent.futures import ThreadPoolExecutor

logging.basicConfig(level=os.getenv("LOG_LEVEL", "INFO"))
log = logging.getLogger(__name__)

app = FastAPI(title="CraftMyCV Python AI Worker")

@app.get("/health")
async def health():
    return {"status": "ok"}

# start kafka consumer in background thread on startup
@app.on_event("startup")
def start_background_worker():
    log.info("Starting Kafka consumer in background thread")
    loop = asyncio.get_event_loop()
    executor = ThreadPoolExecutor(max_workers=1)
    loop.run_in_executor(executor, run_consumer)
