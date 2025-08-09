package com.karthik.resume.backend.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.karthik.resume.backend.dto.ResumeGenerationRequestDTO;
import com.karthik.resume.backend.dto.ResumeGenerationResponseDTO;
import com.karthik.resume.backend.service.interfaces.ResumeGenerationService;
import com.karthik.resume.backend.util.KafkaMessageProducer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeGenerationServiceImpl implements ResumeGenerationService {

    @Autowired
    private final KafkaMessageProducer kafkaMessageProducer;

    @Override
    public ResumeGenerationResponseDTO generateResume(ResumeGenerationRequestDTO request) throws JsonProcessingException {
        log.info("Sending request to AI microservice for user: {}", request.getUserId());
        kafkaMessageProducer.sendMessage(
                "resume-generation-requests",
                request
        );
        return new ResumeGenerationResponseDTO();
    }
}
