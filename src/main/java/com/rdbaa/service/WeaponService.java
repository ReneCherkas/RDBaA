package com.rdbaa.service;

import com.rdbaa.model.entity.Weapon;
import com.rdbaa.repositories.WeaponRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WeaponService {

    private final WeaponRepository weaponRepository;


    List<Weapon> getAll(long pageNumber, long pageSize) {
        return weaponRepository.findAll
    }

}
