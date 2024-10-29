package com.rdbaa.controller;

import com.rdbaa.model.entity.Weapon;
import com.rdbaa.model.entity.WeaponLevel;
import com.rdbaa.service.WeaponService;
import com.rdbaa.service.user.UserService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class WeaponController {
    private static final Logger logger = LoggerFactory.getLogger(WeaponController.class);

    private final WeaponService weaponService;
    private final UserService userService;


    @CrossOrigin
    @GetMapping("/weapons")
    List<Weapon> allWeapons(@RequestParam(defaultValue = "1") int pageNumber, @RequestParam(defaultValue = "10") int pageSize) {
        return weaponService.getAll(pageNumber, pageSize);
    }

    @CrossOrigin
    @GetMapping("/weapons/{id}/levels")
    List<WeaponLevel> weaponLevels(@PathVariable long id) {
        return weaponService.getWeaponLevels(id);
    }
}
