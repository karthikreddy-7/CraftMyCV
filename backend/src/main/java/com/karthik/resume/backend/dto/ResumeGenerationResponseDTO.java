package com.karthik.resume.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResumeGenerationResponseDTO {
    private String htmlContent;
    private String message;
}
