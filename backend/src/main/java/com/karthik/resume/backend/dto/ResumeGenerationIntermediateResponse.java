package com.karthik.resume.backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Getter
@Setter
public class ResumeGenerationIntermediateResponse {
    private UUID id;
    private String status;
    private String title;
    private LocalDateTime createdAt;
    private String message;
}


