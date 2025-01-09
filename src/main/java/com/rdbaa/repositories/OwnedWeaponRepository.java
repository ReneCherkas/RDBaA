package com.rdbaa.repositories;

import com.rdbaa.model.entity.OwnedWeapon;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OwnedWeaponRepository extends JpaRepository<OwnedWeapon, Long> {
    List<OwnedWeapon> findAllByOwnerUsername(String username, Pageable pageable);

    Optional<OwnedWeapon> findByOwnerUsernameAndWeaponName(String username, String weaponName);
}
