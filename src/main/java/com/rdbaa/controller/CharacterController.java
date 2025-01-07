package com.rdbaa.controller;

import com.rdbaa.exception.CharacterAlreadyExistsException;
import com.rdbaa.exception.CharacterDoesntExistsException;
import com.rdbaa.model.dto.CharacterDto;
import com.rdbaa.model.response.CharactersResponse;
import com.rdbaa.service.CharacterService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class CharacterController {
    private static final Logger logger = LoggerFactory.getLogger(CharacterController.class);

    private final CharacterService characterService;


    @CrossOrigin
    @GetMapping("/characters")
    ResponseEntity<CharactersResponse> userCharacters(@RequestParam(defaultValue = "1") int pageNumber, @RequestParam(defaultValue = "10") int pageSize) {
        return ResponseEntity.ok(
                CharactersResponse.builder()
                        .characters(characterService.getAllByUser(pageNumber, pageSize))
                        .build()
        );
    }

    @CrossOrigin
    @PostMapping("/characters")
    ResponseEntity<String> addCharacter(@RequestBody CharacterDto characterDto) {
        try {
            characterService.createCharacter(characterDto);
            return ResponseEntity.ok("Character successfully added");
        } catch (CharacterAlreadyExistsException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @CrossOrigin
    @PutMapping("/characters")
    ResponseEntity<String> modifyCharacter(@RequestBody CharacterDto characterDto) {
        try {
            characterService.modifyCharacter(characterDto);
            return ResponseEntity.ok("Character successfully modified");
        } catch (CharacterDoesntExistsException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
