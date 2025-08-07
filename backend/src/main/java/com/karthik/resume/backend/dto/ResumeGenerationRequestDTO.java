package com.karthik.resume.backend.dto;


import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ResumeGenerationRequestDTO {
    private UUID userId;
    private String jobDescription;
    private String templateId;
    private ResumeGenerationMetadata metadata;
}
