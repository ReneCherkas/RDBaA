package com.rdbaa.repositories;

import com.rdbaa.model.entity.SkillLevel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SkillLevelRepository extends JpaRepository<SkillLevel, Long> {
    List<SkillLevel> findAllBySkillId(long skillId);
}
