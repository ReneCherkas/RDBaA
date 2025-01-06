package com.rdbaa.repositories;

import com.rdbaa.model.entity.Weapon;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.print.Pageable;
import java.util.Collection;
import java.util.Optional;


public interface WeaponRepository extends JpaRepository<Weapon, Long> {
    Optional<Weapon> findById(long id);

    Collection<Weapon> findAll(Pageable pageable, Sort sort);

    Optional<Weapon> findByName(String name);

}
