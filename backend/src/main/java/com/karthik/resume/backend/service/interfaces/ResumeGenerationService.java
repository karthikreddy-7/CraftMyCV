package com.karthik.resume.backend.service.interfaces;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.karthik.resume.backend.dto.ResumeGenerationRequestDTO;
import com.karthik.resume.backend.dto.ResumeGenerationResponseDTO;

public interface ResumeGenerationService {
    ResumeGenerationResponseDTO generateResume(ResumeGenerationRequestDTO request) throws JsonProcessingException;
}

