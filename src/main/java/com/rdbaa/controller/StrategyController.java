package com.rdbaa.controller;

import com.rdbaa.model.request.CharacterStrategyRequest;
import com.rdbaa.model.request.WeaponStrategyRequest;
import com.rdbaa.model.response.StrategyResponse;
import com.rdbaa.service.StrategyService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class StrategyController {
    private static final Logger logger = LoggerFactory.getLogger(StrategyController.class);
    private final StrategyService strategyService;

    @GetMapping("/strategy/character")
    public StrategyResponse getCharacterStrategy(@RequestBody CharacterStrategyRequest request) {
        return new StrategyResponse();
    }

    @GetMapping("/strategy/weapon")
    public StrategyResponse getWeaponStrategy(@RequestBody WeaponStrategyRequest request) {
        return new StrategyResponse();
    }
}
