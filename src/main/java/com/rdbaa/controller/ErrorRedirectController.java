package com.rdbaa.controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ErrorRedirectController implements ErrorController {
    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public void error(HttpServletResponse response) throws IOException {
        response.sendRedirect("/");
    }
}

