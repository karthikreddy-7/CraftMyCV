package com.karthik.resume.backend.controller;



import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class mainController {

    @GetMapping("")
    public String testEndpoint(){
        return "Endpoint is working ! ";
    }
}
