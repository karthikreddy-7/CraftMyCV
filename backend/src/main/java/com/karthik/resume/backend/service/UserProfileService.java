package com.karthik.resume.backend.service;

import com.karthik.resume.backend.entity.UserProfile;

import java.util.Optional;

public interface UserProfileService {
    UserProfile saveProfile(UserProfile profile);

    Optional<UserProfile> getUserProfileByEmail(String email);
}
