package com.rdbaa.controller;

import com.rdbaa.exception.WrongUsernameException;
import com.rdbaa.model.entity.User;
import com.rdbaa.model.request.SignUpRequest;
import com.rdbaa.service.user.UserService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@AllArgsConstructor
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private final UserService userService;

    @CrossOrigin
    @PostMapping("/auth")
    public ResponseEntity<?> signUp(@RequestBody SignUpRequest signUpRequest) {

        if (userService.findByUsername(signUpRequest.getUsername()).isPresent()) {
            logger.error("user with username {} already exists", signUpRequest.getUsername());
            return new ResponseEntity<>(
                    "user with username " + signUpRequest.getUsername() + " already exists",
                    HttpStatus.CONFLICT);
        } else {
            try {
                User user = userService.create(signUpRequest.getUsername(), signUpRequest.getPassword());
                logger.info("user registered {} !!!!!!!!!!!!!!!!", user.getUsername());
                return new ResponseEntity<>(user, HttpStatus.CREATED);
            } catch (WrongUsernameException wrongUsernameException) {
                return new ResponseEntity<>("Unacceptable symbols", HttpStatus.UNSUPPORTED_MEDIA_TYPE);
            }
        }
    }

    @CrossOrigin
    @GetMapping("/auth")
    public ResponseEntity<?> signIn(Principal principal) {
        if (principal != null && userService.findByUsername(principal.getName()).isPresent()) {
            logger.info("user {} is logged in", principal.getName());
            return new ResponseEntity<>(principal.getName(), HttpStatus.OK);
        } else {
            logger.info("Wrong username or password");
            return new ResponseEntity<>("Wrong username or password", HttpStatus.UNAUTHORIZED);
        }
    }
}