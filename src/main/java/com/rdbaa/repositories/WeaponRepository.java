package com.rdbaa.repositories;

import com.rdbaa.model.data.User;
import com.rdbaa.model.data.Weapon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;


public interface WeaponRepository extends JpaRepository<Weapon, Long> {
    @Query("SELECT u FROM Weapon u WHERE u.user = ?1 ORDER BY u.id DESC")
    Collection<Weapon> findAllByUser(User user);
        Weapon findByUserAndName(User user, String name);
}
