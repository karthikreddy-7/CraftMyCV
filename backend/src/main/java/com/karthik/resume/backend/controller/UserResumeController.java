package com.karthik.resume.backend.controller;

import com.karthik.resume.backend.entity.UserResume;
import com.karthik.resume.backend.service.interfaces.UserResumeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/user-resumes")
public class UserResumeController {

    private final UserResumeService service;

    public UserResumeController(UserResumeService service) {
        this.service = service;
    }

    @PostMapping
    public UserResume create(@RequestBody UserResume resume) {
        return service.save(resume);
    }

    @GetMapping
    public List<UserResume> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public UserResume getById(@PathVariable UUID id) {
        return service.getById(id);
    }
}
