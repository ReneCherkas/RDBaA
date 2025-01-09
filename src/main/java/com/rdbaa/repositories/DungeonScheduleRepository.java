package com.rdbaa.repositories;

import com.rdbaa.model.entity.DungeonSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DungeonScheduleRepository extends JpaRepository<DungeonSchedule, Long> {

    List<DungeonSchedule> findAllByDungeonId(long dungeonId);

    List<DungeonSchedule> findAllByItemStackItemName(String itemName);
}
