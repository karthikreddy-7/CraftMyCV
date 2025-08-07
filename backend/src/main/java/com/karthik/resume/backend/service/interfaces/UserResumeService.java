package com.karthik.resume.backend.service.interfaces;

import com.karthik.resume.backend.entity.UserResume;

import java.util.List;
import java.util.UUID;

public interface UserResumeService {
    UserResume save(UserResume resume);
    List<UserResume> getAll();
    UserResume getById(UUID id);
}
