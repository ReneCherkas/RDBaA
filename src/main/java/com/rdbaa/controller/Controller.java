package com.rdbaa.controller;


import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;

@org.springframework.stereotype.Controller
public class Controller {
    @GetMapping
    public String choosePage(HttpSession session){
        return "index.html";
    }
}
