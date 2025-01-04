package com.rdbaa.service;

import com.rdbaa.exception.CharacterAlreadyExistsException;
import com.rdbaa.model.dto.CharacterDto;
import com.rdbaa.model.entity.Character;
import com.rdbaa.model.entity.*;
import com.rdbaa.repositories.*;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipal;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
public class CharacterService {

    private final CharacterRepository characterRepository;
    private final OwnedCharacterRepository ownedCharacterRepository;
    private final UserRepository userRepository;
    private final CharacterLevelRepository characterLevelRepository;
    private final SkillLevelRepository skillLevelRepository;
    private final DungeonScheduleRepository dungeonScheduleRepository;

    private String levelUpDaysByOwnedCharacter(OwnedCharacter ownedCharacter) {
        return Stream.concat(
                        characterLevelRepository.findAllByCharacter(ownedCharacter.getCharacter())
                                .stream().map(CharacterLevel::getResourcesToNextLevel)
                                .flatMap(Collection::stream),
                        skillLevelRepository.findAllBySkillOwner(ownedCharacter.getCharacter())
                                .stream().map(SkillLevel::getResourcesToNextLevel)
                                .flatMap(Collection::stream)
                ).map(itemStack -> itemStack.getItem().getName())
                .distinct()
                .map(dungeonScheduleRepository::findAllByItemStackItemName)
                .flatMap(Collection::stream)
                .map(DungeonSchedule::getDayOfWeek)
                .map(DayOfWeek::getDayOfWeek)
                .map(DayOfWeek.DayOfWeekEnum::getRu)
                .distinct()
                .collect(Collectors.joining(" "));
    }


    public List<CharacterDto> getAllByUser(UserPrincipal userPrincipal, int pageNumber, int pageSize) {
        User user = userRepository.findByUsername(userPrincipal.getName()).orElseThrow();
        List<OwnedCharacter> ownedCharacters = ownedCharacterRepository.findAllByOwnerUsername(user.getUsername(), Pageable.ofSize(pageSize).withPage(pageNumber));
        return ownedCharacters.stream()
                .map(ownedCharacter ->
                        CharacterDto.builder()
                                .name(ownedCharacter.getCharacter().getName())
                                .level(ownedCharacter.getLevel().getLevel())
                                .attackLevel(ownedCharacter.getAttackLevel().getLevel())
                                .elementalSkillLevel(ownedCharacter.getElementalSkillLevel().getLevel())
                                .elementalBurstLevel(ownedCharacter.getElementalBurstLevel().getLevel())
                                .levelUpDays(levelUpDaysByOwnedCharacter(ownedCharacter))
                                .build()
                )
                .toList();
    }

    public OwnedCharacter createCharacter(UserPrincipal userPrincipal, CharacterDto characterDto) {
        User user = userRepository.findByUsername(userPrincipal.getName()).orElseThrow();
        if (ownedCharacterRepository.findByOwnerUsernameAndCharacterName(user.getUsername(), characterDto.getName()).isPresent()) {
            throw new CharacterAlreadyExistsException();
        }
        Character character = characterRepository.findByName(characterDto.getName()).orElseThrow();
        return ownedCharacterRepository.save(OwnedCharacter.builder()
                .owner(user)
                .character(character)
                .level(characterLevelRepository.findByCharacterAndLevel(character, characterDto.getLevel()).orElseThrow())
                .attackLevel(skillLevelRepository.findBySkillOwnerAndLevel(character, characterDto.getAttackLevel()).orElseThrow())
                .elementalSkillLevel(skillLevelRepository.findBySkillOwnerAndLevel(character, characterDto.getElementalSkillLevel()).orElseThrow())
                .elementalBurstLevel(skillLevelRepository.findBySkillOwnerAndLevel(character, characterDto.getElementalBurstLevel()).orElseThrow())
                .build()
        );
    }

    public OwnedCharacter modifyCharacter(UserPrincipal userPrincipal, CharacterDto characterDto) {
        User user = userRepository.findByUsername(userPrincipal.getName()).orElseThrow();
        Optional<OwnedCharacter> ownedCharacterOptional = ownedCharacterRepository.findByOwnerUsernameAndCharacterName(user.getUsername(), characterDto.getName());
        ownedCharacterOptional.ifPresent(ownedCharacterRepository::delete);
        Character character = characterRepository.findByName(characterDto.getName()).orElseThrow();
        return ownedCharacterRepository.save(OwnedCharacter.builder()
                .owner(user)
                .character(character)
                .level(characterLevelRepository.findByCharacterAndLevel(character, characterDto.getLevel()).orElseThrow())
                .attackLevel(skillLevelRepository.findBySkillOwnerAndLevel(character, characterDto.getAttackLevel()).orElseThrow())
                .elementalSkillLevel(skillLevelRepository.findBySkillOwnerAndLevel(character, characterDto.getElementalSkillLevel()).orElseThrow())
                .elementalBurstLevel(skillLevelRepository.findBySkillOwnerAndLevel(character, characterDto.getElementalBurstLevel()).orElseThrow())
                .build()
        );
    }
}
