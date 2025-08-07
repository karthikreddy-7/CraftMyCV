package com.karthik.resume.backend.controller;

import com.karthik.resume.backend.entity.ResumeTemplate;
import com.karthik.resume.backend.service.interfaces.ResumeTemplateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/templates")
public class ResumeTemplateController {

    private final ResumeTemplateService service;

    public ResumeTemplateController(ResumeTemplateService service) {
        this.service = service;
    }

    @PostMapping
    public ResumeTemplate create(@RequestBody ResumeTemplate template) {
        return service.createTemplate(template);
    }

    @GetMapping
    public List<ResumeTemplate> getAll() {
        return service.getAllTemplates();
    }

    @GetMapping("/{id}")
    public ResumeTemplate getById(@PathVariable UUID id) {
        return service.getTemplateById(id);
    }
}
