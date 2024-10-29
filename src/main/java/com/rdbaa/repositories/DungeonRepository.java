package com.rdbaa.repositories;

import com.rdbaa.model.entity.Dungeon;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DungeonRepository extends JpaRepository<Dungeon, Long> {
    Optional<Dungeon> findById(long id);
}
