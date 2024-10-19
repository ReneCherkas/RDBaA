package com.rdbaa.service;

import com.rdbaa.model.entity.Weapon;
import com.rdbaa.model.entity.GettingResource;
import com.rdbaa.repositories.WeaponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DayOfWeekForWeaponService {

    private final WeaponRepository weaponRepository;

    @Autowired
    public DayOfWeekForWeaponService(WeaponRepository weaponRepository) {
        this.weaponRepository = weaponRepository;
    }

    public String isDay(String weaponName) {
        Weapon weapon = weaponRepository.findByName(weaponName);  // Ищем оружие по имени
        if (weapon != null && weapon.getUppingLevels() != null) {
            // Извлекаем связанные ресурсы через уровни оружия
            List<GettingResource> gettingResources = weapon.getUppingLevels().stream()
                    .flatMap(level -> level.getLevelOfWeapon().getResource().getGettingResources().stream())
                    .toList();

            if (!gettingResources.isEmpty()) {
                return gettingResources.get(0).getDate().getDays();  // Возвращаем день получения ресурса
            }
        }
        return "Данные о дате получения не найдены";
    }
}
