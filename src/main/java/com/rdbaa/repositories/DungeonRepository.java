package com.rdbaa.repositories;

import com.rdbaa.model.entity.Dungeon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DungeonRepository extends JpaRepository<Dungeon, Long> {
}
