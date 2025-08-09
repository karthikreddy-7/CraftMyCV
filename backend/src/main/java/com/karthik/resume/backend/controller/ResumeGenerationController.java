package com.karthik.resume.backend.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.karthik.resume.backend.dto.ResumeGenerationRequestDTO;
import com.karthik.resume.backend.dto.ResumeGenerationResponseDTO;
import com.karthik.resume.backend.service.interfaces.ResumeGenerationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class ResumeGenerationController {

    @Autowired
    private ResumeGenerationService resumeGenerationService;

    @PostMapping("/generate-resume")
    public ResponseEntity<?> generateResume(@RequestBody ResumeGenerationRequestDTO request) throws JsonProcessingException {
        ResumeGenerationResponseDTO response = resumeGenerationService.generateResume(request);
        return ResponseEntity.ok(response);
    }

}
