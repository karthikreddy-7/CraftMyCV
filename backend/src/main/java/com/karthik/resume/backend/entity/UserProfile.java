package com.karthik.resume.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "app_users")
@Getter
@Setter
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String fullName;

    @Column(unique = true, nullable = false)
    private String email;

    @Column
    private String phoneNumber;

    @Column
    private String location;

    @Column
    private String headline;

    @Column(columnDefinition = "TEXT")
    private String experience; // JSON string

    @Column(columnDefinition = "TEXT")
    private String education; // JSON string

    @Column(columnDefinition = "TEXT")
    private String skills; // JSON string of array

    @Column(columnDefinition = "TEXT")
    private String githubProfileUrl;

    @Column(columnDefinition = "TEXT")
    private String profileSummary; // Short about me / elevator pitch

    @Column(columnDefinition = "TEXT")
    private String languages; // JSON string (array)

    @Column(columnDefinition = "TEXT")
    private String socialLinks; // JSON object {linkedin, GitHub, portfolio, etc.}

    @Column(columnDefinition = "TEXT")
    private String certifications; // JSON array of cert objects

    @Column(columnDefinition = "TEXT")
    private String projects; // JSON array of project objects

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
