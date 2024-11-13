package com.rdbaa.controller;

import com.rdbaa.model.response.CharacterStrategyResponse;
import com.rdbaa.model.response.WeaponStrategyResponse;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class StrategyController {
    private static final Logger logger = LoggerFactory.getLogger(StrategyController.class);

    @GetMapping("/strategy/character")
    public CharacterStrategyResponse getCharacterStrategy() {
        return new CharacterStrategyResponse();
    }

    @GetMapping("/strategy/weapon")
    public WeaponStrategyResponse getWeaponStrategy() {
        return new WeaponStrategyResponse();
    }
}
