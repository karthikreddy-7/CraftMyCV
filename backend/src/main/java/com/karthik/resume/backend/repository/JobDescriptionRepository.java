package com.karthik.resume.backend.repository;

import com.karthik.resume.backend.entity.JobDescription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface JobDescriptionRepository extends JpaRepository<JobDescription, UUID> {
}
