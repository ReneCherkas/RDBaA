package com.rdbaa.repositories;

import com.rdbaa.model.entity.Character;
import com.rdbaa.model.entity.SkillLevel;
import com.rdbaa.model.entity.SkillType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SkillLevelRepository extends JpaRepository<SkillLevel, Long> {
    List<SkillLevel> findAllBySkillId(long skillId);

    List<SkillLevel> findAllBySkillOwner(Character character);

    Optional<SkillLevel> findBySkillOwnerAndSkillSkillTypeSkillTypeAndLevel(Character character, SkillType.SkillTypeEnum skillType, Long level);
}
