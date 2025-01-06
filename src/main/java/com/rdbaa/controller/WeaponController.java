package com.rdbaa.controller;

import com.rdbaa.exception.WeaponAlreadyExistsException;
import com.rdbaa.exception.WeaponDoesntExistsException;
import com.rdbaa.model.dto.WeaponDto;
import com.rdbaa.model.response.WeaponsResponse;
import com.rdbaa.service.WeaponService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class WeaponController {
    private static final Logger logger = LoggerFactory.getLogger(WeaponController.class);

    private final WeaponService weaponService;


    @CrossOrigin
    @GetMapping("/weapons")
    WeaponsResponse allUserWeapons(@RequestParam(defaultValue = "1") int pageNumber, @RequestParam(defaultValue = "10") int pageSize) {
        return WeaponsResponse.builder().weapons(weaponService.getAllByUser(pageNumber, pageSize)).build();
    }

    @CrossOrigin
    @PostMapping("/weapons")
    ResponseEntity<String> createWeapon(@RequestBody WeaponDto weaponDto) {
        try {
            weaponService.createWeapon(weaponDto);
            return ResponseEntity.ok("Weapon successfully added");
        } catch (WeaponAlreadyExistsException | WeaponDoesntExistsException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @CrossOrigin
    @PutMapping("/weapons")
    ResponseEntity<String> modifyWeapon(@RequestBody WeaponDto weaponDto) {
        try {
            weaponService.modifyWeapon(weaponDto);
            return ResponseEntity.ok("Weapon successfully added");
        } catch (WeaponDoesntExistsException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
