package com.rdbaa.controller;

import com.rdbaa.model.*;
import com.rdbaa.model.entity.User;
import com.rdbaa.model.entity.Weapon;
import com.rdbaa.repositories.UserRepository;
import com.rdbaa.repositories.WeaponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.*;

@RestController
public class WeaponController {
    private final WeaponRepository weaponRepository;
    private final UserRepository userRepository;
    private final Day_of_week_for_weapon dayOfWeekForWeapon;

    @Autowired
    WeaponController(WeaponRepository weaponRepository, UserRepository userRepository, Day_of_week_for_weapon dayOfWeekForWeapon) {
        this.weaponRepository = weaponRepository;
        this.userRepository = userRepository;
        this.dayOfWeekForWeapon = dayOfWeekForWeapon;
    }

    @CrossOrigin
    @GetMapping("/weapon")
    Collection<PointForClient_weapon> allWeapons(Principal user) {
        System.out.println("all points request from " + user.getName());
        List<PointForClient_weapon> pointForClientWeapons = new ArrayList<>();
        User currentUser = userRepository.findByUsername(user.getName());
        if (currentUser != null) {
            Collection<Weapon> weapons = weaponRepository.findAllByUser(currentUser);
            Set<String> weaponNames = new HashSet<>(); // Создаем множество для хранения уникальных имен точек
            for (Weapon w : weapons) {
                if (!weaponNames.contains(w.getName())) { // Проверяем, не содержит ли множество уже такое имя точки
                    pointForClientWeapons.add(new PointForClient_weapon(w.getName(), w.getLevel(), w.getResult(), w.getUser()));
                    weaponNames.add(w.getName()); // Добавляем имя точки в множество
                }
            }
        }
        return pointForClientWeapons;
    }

    @CrossOrigin
    @PostMapping("/weapon")
    PointForClient_weapon newWeapon(@RequestBody PointFromClient_weapon pointFromClient_weapon, Principal user) {
        User currentUser = userRepository.findByUsername(user.getName());
        Weapon existingWeapon = weaponRepository.findByUserAndName(currentUser, pointFromClient_weapon.getName());
        if (existingWeapon != null) {
            // Update the existing point with new values
            existingWeapon.setLevel(pointFromClient_weapon.getLevel());
            existingWeapon.setResult(dayOfWeekForWeapon.isDay(pointFromClient_weapon));
            Weapon updatedWeapon = weaponRepository.save(existingWeapon);
            return new PointForClient_weapon(updatedWeapon.getName(), updatedWeapon.getLevel(), updatedWeapon.getResult(), updatedWeapon.getUser());
        } else {
            // Create a new point
            Weapon newWeapon = new Weapon();
            newWeapon.setName(pointFromClient_weapon.getName());
            newWeapon.setLevel(pointFromClient_weapon.getLevel());
            newWeapon.setResult(dayOfWeekForWeapon.isDay(pointFromClient_weapon));
            newWeapon.setUser(currentUser);
            Weapon savedWeapon = weaponRepository.save(newWeapon);
            return new PointForClient_weapon(savedWeapon.getName(), savedWeapon.getLevel(), savedWeapon.getResult(), savedWeapon.getUser());
        }
    }
}
