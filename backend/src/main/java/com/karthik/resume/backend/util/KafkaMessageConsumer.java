package com.karthik.resume.backend.util;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaMessageConsumer {
    @KafkaListener(topics = "resume-generation-results", groupId = "craftmycv")
    public void listen(String message) {
        System.out.println("Received message from kafka: " + message);
    }
}
