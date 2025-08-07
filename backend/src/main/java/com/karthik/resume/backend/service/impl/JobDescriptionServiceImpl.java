package com.karthik.resume.backend.service.impl;


import com.karthik.resume.backend.entity.JobDescription;
import com.karthik.resume.backend.repository.JobDescriptionRepository;
import com.karthik.resume.backend.service.interfaces.JobDescriptionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class JobDescriptionServiceImpl implements JobDescriptionService {

    private final JobDescriptionRepository repository;

    public JobDescriptionServiceImpl(JobDescriptionRepository repository) {
        this.repository = repository;
    }

    @Override
    public JobDescription createJobDescription(JobDescription jd) {
        return repository.save(jd);
    }

    @Override
    public List<JobDescription> getAllJobDescriptions() {
        return repository.findAll();
    }

    @Override
    public JobDescription getById(UUID id) {
        return repository.findById(id).orElse(null);
    }
}
