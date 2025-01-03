package com.rdbaa.controller;

import com.rdbaa.model.dto.CharacterDto;
import com.rdbaa.model.response.CharactersResponse;
import com.rdbaa.service.CharacterService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipal;

@RestController
@AllArgsConstructor
public class CharacterController {
    private static final Logger logger = LoggerFactory.getLogger(CharacterController.class);

    private final CharacterService characterService;


    @CrossOrigin
    @GetMapping("/characters")
    CharactersResponse userCharacters(UserPrincipal userPrincipal, @RequestParam(defaultValue = "1") int pageNumber, @RequestParam(defaultValue = "10") int pageSize) {
        return CharactersResponse.builder().characters(characterService.getAllByUser(userPrincipal, pageNumber, pageSize)).build();
    }

    @CrossOrigin
    @PostMapping("/characters")
    ResponseEntity<String> addCharacter(UserPrincipal userPrincipal, @RequestBody CharacterDto characterDto) {
        characterService.addCharacter(userPrincipal, characterDto);
        return ResponseEntity.ok("Character successfully added");
    }

}
