package com.karthik.resume.backend.controller;

import com.karthik.resume.backend.entity.UserProfile;
import com.karthik.resume.backend.service.UserProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/user-profiles")
public class UserProfileController {

    @Autowired
    private UserProfileService userProfileService;



    @PostMapping
    public ResponseEntity<UserProfile> createOrUpdateProfile(@RequestBody UserProfile userProfile) {
        log.info("Creating or updating profile for email: {}", userProfile.getEmail());
        UserProfile savedProfile = userProfileService.saveProfile(userProfile);
        log.debug("Profile saved successfully with ID: {}", savedProfile.getId());
        return ResponseEntity.ok(savedProfile);
    }

    @GetMapping("/{email}")
    public ResponseEntity<UserProfile> getProfileByEmail(@PathVariable String email) {
        log.info("Fetching profile for email: {}", email);
        return userProfileService.getUserProfileByEmail(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
