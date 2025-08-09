package com.karthik.resume.backend.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.karthik.resume.backend.dto.ResumeGenerationIntermediateResponse;
import com.karthik.resume.backend.dto.ResumeGenerationRequestDTO;
import com.karthik.resume.backend.dto.ResumeGenerationResponseDTO;
import com.karthik.resume.backend.entity.UserResume;
import com.karthik.resume.backend.service.interfaces.ResumeGenerationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class ResumeGenerationController {

    @Autowired
    private ResumeGenerationService resumeGenerationService;

    @PostMapping("/generate-resume")
    public ResponseEntity<?> generateResume(@RequestBody ResumeGenerationRequestDTO request) throws JsonProcessingException {
        ResumeGenerationIntermediateResponse response = resumeGenerationService.generateResume(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/generate-resume/{id}")
    public ResponseEntity<?> getResumeStatus(@PathVariable UUID id) {
        UserResume resume = resumeGenerationService.getResume(id);
        return ResponseEntity.ok(resume);
    }

}
