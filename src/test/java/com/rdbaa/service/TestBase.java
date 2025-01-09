package com.rdbaa.service;

import com.rdbaa.model.entity.Character;
import com.rdbaa.model.entity.*;

import java.util.ArrayList;

public class TestBase {
    protected com.rdbaa.model.entity.Character testCharacter = Character.builder()
            .id(1L)
            .name("testcharacter")
            .skills(new ArrayList<>())
            .build();

    protected User testUser = User.builder()
            .id(1L)
            .username("testuser")
            .password("testpassword")
            .weapons(new ArrayList<>())
            .characters(new ArrayList<>())
            .build();

    protected WeaponType testWeaponTypeBow = WeaponType.builder()
            .id(1L)
            .weaponType(WeaponType.WeaponTypeEnum.BOW)
            .build();

    protected Weapon testWeapon = Weapon.builder()
            .id(1L)
            .name("testweapon")
            .weaponType(testWeaponTypeBow)
            .build();

    protected WeaponLevel testWeaponLevel = WeaponLevel.builder()
            .id(1L)
            .weapon(testWeapon)
            .level(10L)
            .build();

    protected OwnedWeapon testOwnedWeapon = OwnedWeapon.builder()
            .id(1L)
            .weapon(testWeapon)
            .level(testWeaponLevel)
            .owner(testUser)
            .build();


}
