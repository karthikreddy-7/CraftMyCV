package com.karthik.resume.backend.service.interfaces;

import com.karthik.resume.backend.entity.JobDescription;

import java.util.List;
import java.util.UUID;

public interface JobDescriptionService {
    JobDescription createJobDescription(JobDescription jd);
    List<JobDescription> getAllJobDescriptions();
    JobDescription getById(UUID id);
}
