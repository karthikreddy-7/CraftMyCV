package com.karthik.resume.backend.service.impl;

import com.karthik.resume.backend.entity.UserProfile;
import com.karthik.resume.backend.repository.UserProfileRepository;
import com.karthik.resume.backend.service.interfaces.UserProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserProfileServiceImpl implements UserProfileService {
    private final UserProfileRepository userProfileRepository;

    @Override
    public UserProfile saveProfile(UserProfile profile) {
        return userProfileRepository.save(profile);
    }

    @Override
    public Optional<UserProfile> getUserProfileByEmail(String email) {
        return userProfileRepository.findByEmail(email);
    }

    @Override
    public UserProfile createOrUpdateFromOAuth(Map<String, Object> attributes) {
        String email = (String) attributes.get("email");
        Optional<UserProfile> optional = userProfileRepository.findByEmail(email);

        UserProfile profile = optional.orElse(new UserProfile());
        profile.setEmail(email);
        profile.setFullName((String) attributes.get("name"));
        profile.setLocation((String) attributes.get("location"));
        profile.setGithubProfileUrl((String) attributes.get("html_url"));

        return userProfileRepository.save(profile);
    }

}
