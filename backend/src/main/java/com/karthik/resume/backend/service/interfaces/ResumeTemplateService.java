package com.karthik.resume.backend.service.interfaces;

import com.karthik.resume.backend.entity.ResumeTemplate;

import java.util.List;
import java.util.UUID;

public interface ResumeTemplateService {

    ResumeTemplate createTemplate(ResumeTemplate template);
    List<ResumeTemplate> getAllTemplates();
    ResumeTemplate getTemplateById(UUID id);
}
