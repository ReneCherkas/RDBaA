package com.rdbaa.service;

import com.rdbaa.exception.CharacterDoesntExistsException;
import com.rdbaa.exception.WeaponDoesntExistsException;
import com.rdbaa.repositories.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

@ExtendWith(SpringExtension.class)
class StrategyServiceTest extends TestBase {
    StrategyService service;
    @Mock
    OwnedCharacterRepository ownedCharacterRepository;
    @Mock
    OwnedWeaponRepository ownedWeaponRepository;
    @Mock
    WeaponLevelsRepository weaponLevelsRepository;
    @Mock
    CharacterLevelRepository characterLevelRepository;
    @Mock
    DungeonScheduleRepository dungeonScheduleRepository;
    @Mock
    CharacterRepository characterRepository;
    @Mock
    WeaponRepository weaponRepository;

    @BeforeEach
    void setUp() {
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(
                        testUser,
                        null
                )
        );
        Mockito.reset(
                ownedCharacterRepository,
                ownedWeaponRepository,
                weaponLevelsRepository,
                characterLevelRepository,
                dungeonScheduleRepository,
                characterRepository,
                weaponRepository
        );
        service = new StrategyService(
                ownedCharacterRepository,
                ownedWeaponRepository,
                weaponLevelsRepository,
                characterLevelRepository,
                dungeonScheduleRepository,
                characterRepository,
                weaponRepository
        );
    }

    @Test
    void characterStrategy_NoItems() {
        Mockito.when(characterRepository.findByName(testCharacter.getName()))
                .thenReturn(Optional.of(testCharacter));
        Mockito.when(ownedCharacterRepository.findByOwnerUsernameAndCharacterName(testUser.getUsername(), testCharacter.getName()))
                .thenReturn(Optional.of(testOwnedCharacter));
        Mockito.when(characterLevelRepository.findByCharacterAndLevel(testCharacter, testCharacterLevel.getLevel()))
                .thenReturn(Optional.of(testCharacterLevel));
        try {
            Assertions.assertTrue(service.strategyPoints(testCharacter.getName(), testCharacterLevel.getLevel()).isEmpty());
        } catch (CharacterDoesntExistsException | WeaponDoesntExistsException e) {
            Assertions.fail();
        }
    }

    @Test
    void weaponStrategy_NoItems() {
        Mockito.when(weaponRepository.findByName(testWeapon.getName()))
                .thenReturn(Optional.of(testWeapon));
        Mockito.when(ownedWeaponRepository.findByOwnerUsernameAndWeaponName(testUser.getUsername(), testWeapon.getName()))
                .thenReturn(Optional.of(testOwnedWeapon));
        Mockito.when(weaponLevelsRepository.findByWeaponAndLevel(testWeapon, testWeaponLevel.getLevel()))
                .thenReturn(Optional.of(testWeaponLevel));
        try {
            Assertions.assertTrue(service.strategyPoints(testWeapon.getName(), testWeaponLevel.getLevel()).isEmpty());
        } catch (CharacterDoesntExistsException | WeaponDoesntExistsException e) {
            Assertions.fail();
        }
    }
}