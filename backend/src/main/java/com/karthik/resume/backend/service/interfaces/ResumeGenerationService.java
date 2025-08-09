package com.karthik.resume.backend.service.interfaces;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.karthik.resume.backend.dto.ResumeGenerationIntermediateResponse;
import com.karthik.resume.backend.dto.ResumeGenerationRequestDTO;
import com.karthik.resume.backend.dto.ResumeGenerationResponseDTO;
import com.karthik.resume.backend.entity.UserResume;

import java.util.UUID;

public interface ResumeGenerationService {
    ResumeGenerationIntermediateResponse generateResume(ResumeGenerationRequestDTO request) throws JsonProcessingException;
    UserResume getResume(UUID uuid);
}

