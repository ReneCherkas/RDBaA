package com.rdbaa.repositories;

import com.rdbaa.model.entity.Weapon;
import com.rdbaa.model.entity.WeaponLevel;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.print.Pageable;
import java.util.Collection;
import java.util.List;
import java.util.Optional;


public interface WeaponLevelsRepository extends JpaRepository<WeaponLevel, Long> {
    List<WeaponLevel> findByWeaponId(long id);

    Collection<WeaponLevel> findAll(Pageable pageable, Sort sort);

    Optional<WeaponLevel> findByWeaponAndLevel(Weapon weapon, Long level);

}
