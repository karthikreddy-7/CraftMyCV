package com.karthik.resume.backend.service.impl;


import com.karthik.resume.backend.entity.UserResume;
import com.karthik.resume.backend.repository.UserResumeRepository;
import com.karthik.resume.backend.service.interfaces.UserResumeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserResumeServiceImpl implements UserResumeService {

    private final UserResumeRepository repository;

    public UserResumeServiceImpl(UserResumeRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserResume save(UserResume resume) {
        return repository.save(resume);
    }

    @Override
    public List<UserResume> getAll() {
        return repository.findAll();
    }

    @Override
    public UserResume getById(UUID id) {
        return repository.findById(id).orElse(null);
    }
}

