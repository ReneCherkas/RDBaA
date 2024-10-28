package com.rdbaa.controller;

import com.rdbaa.exception.WrongUsernameException;
import com.rdbaa.model.entity.User;
import com.rdbaa.model.request.RegisterUserRequest;
import com.rdbaa.service.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("/auth")
    public ResponseEntity<?> createUser(@RequestBody RegisterUserRequest registerUserRequest) {

        if (userService.findByUsername(registerUserRequest.getUsername()).isPresent()) {
            logger.error("user with username {} already exists", registerUserRequest.getUsername());
            return new ResponseEntity<>(
                    new RuntimeException("user with username " + registerUserRequest.getUsername() + " already exists"),
                    HttpStatus.CONFLICT);
        } else {
            try {
                User user = userService.create(registerUserRequest.getUsername(), registerUserRequest.getPassword());
                logger.info("user registered {} !!!!!!!!!!!!!!!!", user.getUsername());
                return new ResponseEntity<>(user, HttpStatus.CREATED);
            } catch (WrongUsernameException wrongUsernameException) {
                return new ResponseEntity<>("Unacceptable symbols", HttpStatus.UNSUPPORTED_MEDIA_TYPE);
            }
        }
    }

    @CrossOrigin
    @RequestMapping("/auth")
    public ResponseEntity<?> user(Principal principal) {
        if (principal != null && userService.findByUsername(principal.getName()).isPresent()) {
            logger.info("user {} is logged", principal.getName());
            return new ResponseEntity<>(principal.getName(), HttpStatus.OK);
        } else {
            logger.info("Wrong username or password");
            return new ResponseEntity<>("Wrong username or password", HttpStatus.UNAUTHORIZED);
        }
    }
}