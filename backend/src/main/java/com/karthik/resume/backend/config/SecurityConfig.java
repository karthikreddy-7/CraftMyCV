package com.karthik.resume.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Disable Cross-Site Request Forgery protection for now, as we are not using browser forms
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        // Permit all requests to any URL starting with /api/
                        .requestMatchers("/api/**").permitAll()
                        // Any other request that doesn't match the above must be authenticated (we don't have any others yet)
                        .anyRequest().authenticated()
                );
        return http.build();
    }
}