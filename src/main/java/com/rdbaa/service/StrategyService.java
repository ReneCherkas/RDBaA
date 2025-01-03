package com.rdbaa.service;

import com.rdbaa.model.dto.StrategyPoint;
import com.rdbaa.repositories.CharacterRepository;
import com.rdbaa.repositories.WeaponRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StrategyService {
    private CharacterRepository characterRepository;
    private WeaponRepository weaponRepository;

    public List<StrategyPoint> characterStrategy() {

    }

    public List<StrategyPoint> weaponStrategy() {

    }
}
