package com.rdbaa.service;

import com.rdbaa.model.entity.Weapon;
import com.rdbaa.model.entity.WeaponLevel;
import com.rdbaa.repositories.WeaponLevelsRepository;
import com.rdbaa.repositories.WeaponRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WeaponService {

    private final WeaponRepository weaponRepository;
    private final WeaponLevelsRepository weaponLevelsRepository;


    public List<Weapon> getAll(int pageNumber, int pageSize) {
        return weaponRepository.findAll(Pageable.ofSize(pageSize).withPage(pageNumber)).toList();
    }

    public List<WeaponLevel> getWeaponLevels(long id) {
        return weaponLevelsRepository.findByWeaponId(id);
    }
}
