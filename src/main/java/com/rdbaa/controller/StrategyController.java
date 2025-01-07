package com.rdbaa.controller;

import com.rdbaa.exception.CharacterDoesntExistsException;
import com.rdbaa.exception.WeaponDoesntExistsException;
import com.rdbaa.model.request.StrategyRequest;
import com.rdbaa.model.response.StrategyResponse;
import com.rdbaa.service.StrategyService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class StrategyController {
    private static final Logger logger = LoggerFactory.getLogger(StrategyController.class);
    private final StrategyService strategyService;

    @GetMapping("/strategy/character")
    public ResponseEntity<StrategyResponse> getCharacterStrategy(@RequestBody StrategyRequest request) {
        try {
            return ResponseEntity.ok(
                    StrategyResponse.builder()
                            .points(strategyService.strategyPoints(request.getName(), request.getNewLevel()))
                            .build()
            );
        } catch (IllegalArgumentException | CharacterDoesntExistsException | WeaponDoesntExistsException e) {
            logger.error("Error with calculating strategy {}", e);
            return ResponseEntity.badRequest().build();
        }
    }
}
