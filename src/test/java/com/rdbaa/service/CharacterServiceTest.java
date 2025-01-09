package com.rdbaa.service;

import com.rdbaa.exception.CharacterAlreadyExistsException;
import com.rdbaa.exception.CharacterDoesntExistsException;
import com.rdbaa.model.dto.CharacterDto;
import com.rdbaa.model.entity.SkillType;
import com.rdbaa.repositories.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.data.domain.Pageable;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
class CharacterServiceTest extends TestBase {
    CharacterService service;
    @Mock
    CharacterRepository characterRepository;
    @Mock
    OwnedCharacterRepository ownedCharacterRepository;
    @Mock
    CharacterLevelRepository characterLevelRepository;
    @Mock
    SkillLevelRepository skillLevelRepository;
    @Mock
    DungeonScheduleRepository dungeonScheduleRepository;

    @BeforeEach
    void setUp() {
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(
                        testUser,
                        null
                )
        );
        Mockito.reset(
                characterRepository,
                ownedCharacterRepository,
                characterLevelRepository,
                skillLevelRepository,
                dungeonScheduleRepository
        );
        service = new CharacterService(
                characterRepository,
                ownedCharacterRepository,
                characterLevelRepository,
                skillLevelRepository,
                dungeonScheduleRepository
        );
    }

    @Test
    void getAllByUser_NoCharacters() {
        Assertions.assertTrue(
                service.getAllByUser(1, 10).isEmpty()
        );
    }

    @Test
    void getAllByUser_OneCharacter() {
        Mockito.when(ownedCharacterRepository.findAllByOwnerUsername(testUser.getUsername(), Pageable.ofSize(10).withPage(1)))
                .thenReturn(List.of(testOwnedCharacter));
        Assertions.assertEquals(1, service.getAllByUser(1, 10).size());
    }

    @Test
    void createCharacter_Success() {
        Mockito.when(ownedCharacterRepository.findByOwnerUsernameAndCharacterName(testUser.getUsername(), testCharacter.getName()))
                .thenReturn(Optional.empty());
        Mockito.when(characterRepository.findByName(testCharacter.getName()))
                .thenReturn(Optional.of(testCharacter));
        Mockito.when(characterLevelRepository.findByCharacterAndLevel(testCharacter, testCharacterLevel.getLevel()))
                .thenReturn(Optional.of(testCharacterLevel));
        Mockito.when(skillLevelRepository.findBySkillOwnerAndSkillSkillTypeSkillTypeAndLevel(testCharacter, SkillType.SkillTypeEnum.ATTACK, testAttackSkillLevel.getLevel()))
                .thenReturn(Optional.of(testAttackSkillLevel));
        Mockito.when(skillLevelRepository.findBySkillOwnerAndSkillSkillTypeSkillTypeAndLevel(testCharacter, SkillType.SkillTypeEnum.ELEMENTAL_SKILL, testElementalSkillLevel.getLevel()))
                .thenReturn(Optional.of(testElementalSkillLevel));
        Mockito.when(skillLevelRepository.findBySkillOwnerAndSkillSkillTypeSkillTypeAndLevel(testCharacter, SkillType.SkillTypeEnum.ELEMENTAL_BURST, testElementalBurstSkillLevel.getLevel()))
                .thenReturn(Optional.of(testElementalBurstSkillLevel));

        try {
            service.createCharacter(CharacterDto.builder()
                    .name(testCharacter.getName())
                    .level(testCharacterLevel.getLevel())
                    .attackLevel(testAttackSkillLevel.getLevel())
                    .elementalSkillLevel(testElementalSkillLevel.getLevel())
                    .elementalBurstLevel(testElementalBurstSkillLevel.getLevel())
                    .build());
        } catch (CharacterAlreadyExistsException e) {
            Assertions.fail();
        }
    }

    @Test
    void createCharacter_AlreadyExistsException() {
        Mockito.when(ownedCharacterRepository.findByOwnerUsernameAndCharacterName(testUser.getUsername(), testCharacter.getName()))
                .thenReturn(Optional.of(testOwnedCharacter));
        Assertions.assertThrows(CharacterAlreadyExistsException.class, () -> {
            service.createCharacter(CharacterDto.builder()
                    .name(testCharacter.getName())
                    .level(testCharacterLevel.getLevel())
                    .attackLevel(testAttackSkillLevel.getLevel())
                    .elementalSkillLevel(testElementalSkillLevel.getLevel())
                    .elementalBurstLevel(testElementalBurstSkillLevel.getLevel())
                    .build());
        });
    }

    @Test
    void modifyCharacter_Success() {
        Mockito.when(ownedCharacterRepository.findByOwnerUsernameAndCharacterName(testUser.getUsername(), testCharacter.getName()))
                .thenReturn(Optional.of(testOwnedCharacter));
        Mockito.when(characterRepository.findByName(testCharacter.getName()))
                .thenReturn(Optional.of(testCharacter));
        Mockito.when(characterLevelRepository.findByCharacterAndLevel(testCharacter, testCharacterLevel.getLevel()))
                .thenReturn(Optional.of(testCharacterLevel));
        Mockito.when(skillLevelRepository.findBySkillOwnerAndSkillSkillTypeSkillTypeAndLevel(testCharacter, SkillType.SkillTypeEnum.ATTACK, testAttackSkillLevel.getLevel()))
                .thenReturn(Optional.of(testAttackSkillLevel));
        Mockito.when(skillLevelRepository.findBySkillOwnerAndSkillSkillTypeSkillTypeAndLevel(testCharacter, SkillType.SkillTypeEnum.ELEMENTAL_SKILL, testElementalSkillLevel.getLevel()))
                .thenReturn(Optional.of(testElementalSkillLevel));
        Mockito.when(skillLevelRepository.findBySkillOwnerAndSkillSkillTypeSkillTypeAndLevel(testCharacter, SkillType.SkillTypeEnum.ELEMENTAL_BURST, testElementalBurstSkillLevel.getLevel()))
                .thenReturn(Optional.of(testElementalBurstSkillLevel));

        try {
            service.modifyCharacter(CharacterDto.builder()
                    .name(testCharacter.getName())
                    .level(testCharacterLevel.getLevel())
                    .attackLevel(testAttackSkillLevel.getLevel())
                    .elementalSkillLevel(testElementalSkillLevel.getLevel())
                    .elementalBurstLevel(testElementalBurstSkillLevel.getLevel())
                    .build());
        } catch (CharacterDoesntExistsException e) {
            Assertions.fail();
        }
    }

    @Test
    void modify_DoesntExistsException() {
        Mockito.when(ownedCharacterRepository.findByOwnerUsernameAndCharacterName(testUser.getUsername(), testCharacter.getName()))
                .thenReturn(Optional.empty());
        Assertions.assertThrows(CharacterDoesntExistsException.class, () -> {
            service.modifyCharacter(CharacterDto.builder()
                    .name(testCharacter.getName())
                    .level(testCharacterLevel.getLevel())
                    .attackLevel(testAttackSkillLevel.getLevel())
                    .elementalSkillLevel(testElementalSkillLevel.getLevel())
                    .elementalBurstLevel(testElementalBurstSkillLevel.getLevel())
                    .build());
        });
    }
}