package com.rdbaa.repositories;

import com.rdbaa.model.entity.Weapon;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface WeaponRepository extends JpaRepository<Weapon, Long> {
    Optional<Weapon> findByName(String name);
}
