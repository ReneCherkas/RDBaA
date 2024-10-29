package com.rdbaa.repositories;

import com.rdbaa.model.entity.WeaponLevel;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.print.Pageable;
import java.util.Collection;
import java.util.List;


public interface WeaponLevelsRepository extends JpaRepository<WeaponLevel, Long> {
    List<WeaponLevel> findByWeaponId(long id);

    Collection<WeaponLevel> findAll(Pageable pageable, Sort sort);

}
