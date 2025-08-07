package com.karthik.resume.backend.service.impl;

import com.karthik.resume.backend.entity.ResumeTemplate;
import com.karthik.resume.backend.repository.ResumeTemplateRepository;
import com.karthik.resume.backend.service.interfaces.ResumeTemplateService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ResumeTemplateServiceImpl implements ResumeTemplateService {

    private final ResumeTemplateRepository repository;

    public ResumeTemplateServiceImpl(ResumeTemplateRepository repository) {
        this.repository = repository;
    }

    @Override
    public ResumeTemplate createTemplate(ResumeTemplate template) {
        return repository.save(template);
    }

    @Override
    public List<ResumeTemplate> getAllTemplates() {
        return repository.findAll();
    }

    @Override
    public ResumeTemplate getTemplateById(UUID id) {
        return repository.findById(id).orElse(null);
    }
}
