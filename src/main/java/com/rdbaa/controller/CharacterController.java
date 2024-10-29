package com.rdbaa.controller;

import com.rdbaa.model.entity.Character;
import com.rdbaa.service.CharacterService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class CharacterController {
    private static final Logger logger = LoggerFactory.getLogger(CharacterController.class);

    private final CharacterService characterService;


    @CrossOrigin
    @GetMapping("/characters")
    List<Character> allWeapons(@RequestParam(defaultValue = "1") int pageNumber, @RequestParam(defaultValue = "10") int pageSize) {
        return characterService.getAll(pageNumber, pageSize);
    }
}
