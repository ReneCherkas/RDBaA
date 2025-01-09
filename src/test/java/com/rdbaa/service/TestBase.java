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

    protected CharacterLevel testCharacterLevel = CharacterLevel.builder()
            .id(1L)
            .character(testCharacter)
            .level(5L)
            .needs(new ArrayList<>())
            .build();

    protected SkillType testAttackSkillType = SkillType.builder()
            .id(1L)
            .skillType(SkillType.SkillTypeEnum.ATTACK)
            .build();

    protected SkillType testElementalSkillSkillType = SkillType.builder()
            .id(2L)
            .skillType(SkillType.SkillTypeEnum.ELEMENTAL_SKILL)
            .build();

    protected SkillType testElementalBurstSkillType = SkillType.builder()
            .id(3L)
            .skillType(SkillType.SkillTypeEnum.ELEMENTAL_BURST)
            .build();

    protected Skill testAttackSkill = Skill.builder()
            .id(1L)
            .skillType(testAttackSkillType)
            .name("testattackskill")
            .owner(testCharacter)
            .build();
    protected Skill testElementalSkill = Skill.builder()
            .id(2L)
            .skillType(testElementalSkillSkillType)
            .name("testelementalskill")
            .owner(testCharacter)
            .build();
    protected Skill testElementalBurstSkill = Skill.builder()
            .id(3L)
            .skillType(testElementalBurstSkillType)
            .name("testelementalburst")
            .owner(testCharacter)
            .build();

    protected SkillLevel testAttackSkillLevel = SkillLevel.builder()
            .id(1L)
            .skill(testAttackSkill)
            .level(10L)
            .needs(new ArrayList<>())
            .build();
    protected SkillLevel testElementalSkillLevel = SkillLevel.builder()
            .id(1L)
            .skill(testElementalSkill)
            .level(10L)
            .needs(new ArrayList<>())
            .build();
    protected SkillLevel testElementalBurstSkillLevel = SkillLevel.builder()
            .id(1L)
            .skill(testElementalBurstSkill)
            .level(10L)
            .needs(new ArrayList<>())
            .build();


    protected OwnedCharacter testOwnedCharacter = OwnedCharacter.builder()
            .id(1L)
            .character(testCharacter)
            .owner(testUser)
            .level(testCharacterLevel)
            .attackLevel(testAttackSkillLevel)
            .elementalSkillLevel(testElementalSkillLevel)
            .elementalBurstLevel(testElementalBurstSkillLevel)
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
            .needs(new ArrayList<>())
            .build();

    protected OwnedWeapon testOwnedWeapon = OwnedWeapon.builder()
            .id(1L)
            .weapon(testWeapon)
            .level(testWeaponLevel)
            .owner(testUser)
            .build();


}
