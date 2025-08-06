package com.karthik.resume.backend.controller;

import com.karthik.resume.backend.entity.UserProfile;
import com.karthik.resume.backend.service.UserProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserProfileService userProfileService;

    @GetMapping("/user-info")
    public ResponseEntity<?> getUserInfo(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            log.warn("Unauthorized access to /user-info");
            return ResponseEntity.status(401).body("Unauthorized: Please login first.");
        }
        Map<String, Object> attributes = principal.getAttributes();

        String email = (String) attributes.get("email");
        String name = (String) attributes.get("name");
        String location = (String) attributes.get("location");

        Optional<UserProfile> existing = userProfileService.getUserProfileByEmail(email);

        UserProfile profile = existing.orElseGet(() -> {
            UserProfile newProfile = new UserProfile();
            newProfile.setEmail(email);
            newProfile.setFullName(name);
            newProfile.setLocation(location);
            return userProfileService.saveProfile(newProfile);
        });

        return ResponseEntity.ok(profile);
    }




}
