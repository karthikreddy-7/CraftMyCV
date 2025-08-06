package com.karthik.resume.backend.repository;

import com.karthik.resume.backend.entity.ResumeTemplate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ResumeTemplateRepository extends JpaRepository<ResumeTemplate, UUID> {
}
