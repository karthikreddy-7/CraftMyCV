package com.karthik.resume.backend.util;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.karthik.resume.backend.dto.ResumeGenerationRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KafkaMessageProducer {
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @Autowired
    private final ObjectMapper objectMapper;

    public void sendMessage(String topic, ResumeGenerationRequestDTO message) throws JsonProcessingException {
        String jsonRequest = objectMapper.writeValueAsString(message);
        kafkaTemplate.send(topic, jsonRequest);
    }
}
