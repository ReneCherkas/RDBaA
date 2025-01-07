package com.rdbaa.repositories;

import com.rdbaa.model.entity.OwnedCharacter;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OwnedCharacterRepository extends JpaRepository<OwnedCharacter, Long> {
    Optional<OwnedCharacter> findById(long id);

    List<OwnedCharacter> findAllByOwnerUsername(String username, Pageable pageable);

    Optional<OwnedCharacter> findByOwnerUsernameAndCharacterName(String username, String characterName);
}
