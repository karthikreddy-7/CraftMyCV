package com.karthik.resume.backend.service.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.karthik.resume.backend.dto.ResumeGenerationIntermediateResponse;
import com.karthik.resume.backend.dto.ResumeGenerationRequestDTO;
import com.karthik.resume.backend.entity.ResumeTemplate;
import com.karthik.resume.backend.entity.UserProfile;
import com.karthik.resume.backend.entity.UserResume;
import com.karthik.resume.backend.repository.ResumeTemplateRepository;
import com.karthik.resume.backend.repository.UserProfileRepository;
import com.karthik.resume.backend.repository.UserResumeRepository;
import com.karthik.resume.backend.service.interfaces.ResumeGenerationService;
import com.karthik.resume.backend.util.KafkaMessageProducer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeGenerationServiceImpl implements ResumeGenerationService {

    @Autowired
    private final KafkaMessageProducer kafkaMessageProducer;

    @Autowired
    private final UserResumeRepository userResumeRepository;

    @Autowired
    private final UserProfileRepository userProfileRepository;

    @Autowired
    private final ResumeTemplateRepository resumeTemplateRepository;

    @Override
    public ResumeGenerationIntermediateResponse generateResume(ResumeGenerationRequestDTO request) throws JsonProcessingException {
        log.info("Sending request to AI microservice for user: {}", request.getUserId());
        UserProfile userProfile = userProfileRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        ResumeTemplate template = resumeTemplateRepository.findById(UUID.fromString(request.getTemplateId()))
                .orElseThrow(() -> new RuntimeException("Template not found"));
        UserResume resume = new UserResume();
        resume.setUser(userProfile);
        resume.setTemplate(template);
        resume.setTitle(request.getTitle());
        resume.setJobDescription(request.getJobDescription());
        resume.setStatus("PENDING");
        userResumeRepository.save(resume);

        request.setUserResumeId(resume.getId());
        kafkaMessageProducer.sendMessage("resume-generation-requests", request);

        ResumeGenerationIntermediateResponse response = new ResumeGenerationIntermediateResponse();
        response.setId(resume.getId());
        response.setStatus("PENDING");
        response.setTitle(resume.getTitle());
        response.setCreatedAt(resume.getCreatedAt());
        response.setMessage("Your resume generation request has been received.");
        return response;
    }

    @Override
    public UserResume getResume(UUID id) {
        return userResumeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resume not found"));
    }
}
