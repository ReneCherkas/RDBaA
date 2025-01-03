package com.rdbaa.repositories;

import com.rdbaa.model.entity.Character;
import com.rdbaa.model.entity.CharacterLevel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CharacterLevelRepository extends JpaRepository<CharacterLevel, Long> {
    List<CharacterLevel> findAllByCharacter(Character character);

    Optional<CharacterLevel> findByCharacterAndLevel(Character character, Long level);
}
