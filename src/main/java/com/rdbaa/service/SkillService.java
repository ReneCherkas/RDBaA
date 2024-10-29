package com.rdbaa.service;

import com.rdbaa.model.entity.SkillLevel;
import com.rdbaa.repositories.SkillLevelRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SkillService {
    private final SkillLevelRepository skillLevelRepository;

    public List<SkillLevel> gelLevels(long skillId) {
        return skillLevelRepository.findAllBySkillId(skillId);
    }
}
