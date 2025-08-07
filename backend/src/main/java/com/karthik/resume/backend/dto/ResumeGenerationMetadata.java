package com.karthik.resume.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResumeGenerationMetadata {
    private String tone;
    private int maxExperienceBullets;
    private int maxProjectBullets;
}
