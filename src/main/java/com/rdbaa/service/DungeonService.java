package com.rdbaa.service;

import com.rdbaa.model.entity.Dungeon;
import com.rdbaa.model.entity.DungeonSchedule;
import com.rdbaa.repositories.DungeonRepository;
import com.rdbaa.repositories.DungeonScheduleRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DungeonService {
    private final DungeonRepository dungeonRepository;
    private final DungeonScheduleRepository dungeonScheduleRepository;

    public List<Dungeon> getAll(int pageNumber, int pageSize) {
        return dungeonRepository.findAll(Pageable.ofSize(pageSize).withPage(pageNumber)).toList();
    }

    public List<DungeonSchedule> getScheduleByDungeonId(long dungeonId) {
        return dungeonScheduleRepository.findAllByDungeonId(dungeonId);
    }
}
