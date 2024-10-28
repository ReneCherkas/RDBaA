package com.rdbaa.controller;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller
public class MainPageController {
    @GetMapping
    public String choosePage(){
        return "index.html";
    }
}
