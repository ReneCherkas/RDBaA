package com.rdbaa.controller;

import com.rdbaa.model.entity.SkillLevel;
import com.rdbaa.service.SkillService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class SkillController {
    private static final Logger logger = LoggerFactory.getLogger(SkillController.class);

    private final SkillService skillService;


    @CrossOrigin
    @GetMapping("/skills/{id}/levels")
    List<SkillLevel> skillLevels(@PathVariable int id) {
        return skillService.gelLevels(id);
    }
}
