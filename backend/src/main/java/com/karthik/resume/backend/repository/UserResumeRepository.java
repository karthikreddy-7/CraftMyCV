package com.karthik.resume.backend.repository;

import com.karthik.resume.backend.entity.UserResume;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserResumeRepository extends JpaRepository<UserResume, UUID> {
}
