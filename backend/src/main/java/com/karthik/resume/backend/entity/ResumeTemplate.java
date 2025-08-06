package com.karthik.resume.backend.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Table(name = "resume_templates")
@Setter
public class ResumeTemplate {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(unique = true,nullable = false)
    private String name;

    @Column(length = 500)
    private String description;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String htmlContent;

    @Column(columnDefinition = "TEXT")
    private String metadata;

    @Column()
    private String previewUrl;

    @Column()
    private Boolean isPublic = true;

    private String createdBy;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
