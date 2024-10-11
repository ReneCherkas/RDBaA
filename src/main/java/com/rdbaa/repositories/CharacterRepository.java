package com.rdbaa.repositories;

import com.rdbaa.model.data.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {
    Character findByName(String name);
}
