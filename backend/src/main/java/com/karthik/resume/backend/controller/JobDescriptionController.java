package com.karthik.resume.backend.controller;

import com.karthik.resume.backend.entity.JobDescription;
import com.karthik.resume.backend.service.interfaces.JobDescriptionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/job-descriptions")
public class JobDescriptionController {

    private final JobDescriptionService service;

    public JobDescriptionController(JobDescriptionService service) {
        this.service = service;
    }

    @PostMapping
    public JobDescription create(@RequestBody JobDescription jd) {
        return service.createJobDescription(jd);
    }

    @GetMapping
    public List<JobDescription> getAll() {
        return service.getAllJobDescriptions();
    }

    @GetMapping("/{id}")
    public JobDescription getById(@PathVariable UUID id) {
        return service.getById(id);
    }
}
