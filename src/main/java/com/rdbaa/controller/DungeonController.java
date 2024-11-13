package com.rdbaa.controller;

import com.rdbaa.model.entity.Dungeon;
import com.rdbaa.model.entity.DungeonSchedule;
import com.rdbaa.service.DungeonService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class DungeonController {
    private static final Logger logger = LoggerFactory.getLogger(DungeonController.class);

    private final DungeonService dungeonService;


    @CrossOrigin
    @GetMapping("/dungeons")
    List<Dungeon> allDungeons(@RequestParam(defaultValue = "1") int pageNumber, @RequestParam(defaultValue = "10") int pageSize) {
        return dungeonService.getAll(pageNumber, pageSize);
    }

    @CrossOrigin
    @GetMapping("/dungeons/{id}/schedule")
    List<DungeonSchedule> dungeonSchedules(@PathVariable int id) {
        return dungeonService.getScheduleByDungeonId(id);
    }
}
