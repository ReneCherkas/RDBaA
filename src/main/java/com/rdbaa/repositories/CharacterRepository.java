package com.rdbaa.repositories;

import com.rdbaa.model.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {
    Optional<Character> findById(long id);

    Optional<Character> findByName(String name);
}
