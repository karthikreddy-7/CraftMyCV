package com.karthik.resume.backend.service;

import com.karthik.resume.backend.entity.UserProfile;

import java.util.Map;
import java.util.Optional;

public interface UserProfileService {
    UserProfile saveProfile(UserProfile profile);

    Optional<UserProfile> getUserProfileByEmail(String email);

    public UserProfile createOrUpdateFromOAuth(Map<String, Object> attributes);

}
