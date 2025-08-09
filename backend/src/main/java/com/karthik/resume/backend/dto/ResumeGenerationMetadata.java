package com.karthik.resume.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResumeGenerationMetadata {
    private String tone;
    private int maxExperienceBullets;
    private int maxProjectBullets;
}
