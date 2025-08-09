FROM python:3.11-slim

# system deps for confluent-kafka
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential ca-certificates libsasl2-dev librdkafka-dev \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app
COPY .env.example .env

ENV PYTHONUNBUFFERED=1
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
