package com.rdbaa.repositories;

import com.rdbaa.model.entity.Weapon;
import com.rdbaa.model.entity.WeaponLevel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface WeaponLevelsRepository extends JpaRepository<WeaponLevel, Long> {
    List<WeaponLevel> findByWeaponId(long id);

    Optional<WeaponLevel> findByWeaponAndLevel(Weapon weapon, Long level);
}
