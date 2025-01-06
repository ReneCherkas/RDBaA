package com.rdbaa.service;

import com.rdbaa.exception.WeaponAlreadyExistsException;
import com.rdbaa.exception.WeaponDoesntExistsException;
import com.rdbaa.model.dto.WeaponDto;
import com.rdbaa.model.entity.OwnedWeapon;
import com.rdbaa.model.entity.User;
import com.rdbaa.model.entity.Weapon;
import com.rdbaa.model.entity.WeaponLevel;
import com.rdbaa.repositories.OwnedWeaponRepository;
import com.rdbaa.repositories.WeaponLevelsRepository;
import com.rdbaa.repositories.WeaponRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class WeaponService {
    private final WeaponLevelsRepository weaponLevelsRepository;
    private final OwnedWeaponRepository ownedWeaponRepository;
    private final WeaponRepository weaponRepository;

    public List<WeaponDto> getAllByUser(int pageNumber, int pageSize) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ownedWeaponRepository.findAllByOwnerUsername(user.getUsername(), Pageable.ofSize(pageSize).withPage(pageNumber))
                .stream()
                .map(ownedWeapon -> WeaponDto.builder()
                        .name(ownedWeapon.getWeapon().getName())
                        .level(ownedWeapon.getLevel().getLevel())
                        .build()
                )
                .toList();
    }

    public OwnedWeapon createWeapon(WeaponDto weaponDto) throws WeaponAlreadyExistsException, WeaponDoesntExistsException {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<OwnedWeapon> ownedWeaponOptional = ownedWeaponRepository.findByOwnerUsernameAndWeaponName(user.getUsername(), weaponDto.getName());
        if (ownedWeaponOptional.isPresent()) {
            throw new WeaponAlreadyExistsException();
        }
        Weapon weapon = weaponRepository.findByName(weaponDto.getName()).orElseThrow(WeaponDoesntExistsException::new);
        return ownedWeaponRepository.save(OwnedWeapon.builder()
                .owner(user)
                .weapon(weapon)
                .level(weaponLevelsRepository.findByWeaponAndLevel(weapon, weaponDto.getLevel()).orElseThrow())
                .build()
        );
    }

    public OwnedWeapon modifyWeapon(WeaponDto weaponDto) throws WeaponDoesntExistsException {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<OwnedWeapon> ownedWeaponOptional = ownedWeaponRepository.findByOwnerUsernameAndWeaponName(user.getUsername(), weaponDto.getName());
        if (ownedWeaponOptional.isEmpty()) {
            throw new WeaponDoesntExistsException();
        }
        Weapon weapon = weaponRepository.findByName(weaponDto.getName()).orElseThrow(WeaponDoesntExistsException::new);
        return ownedWeaponRepository.save(OwnedWeapon.builder()
                .owner(user)
                .weapon(weapon)
                .level(weaponLevelsRepository.findByWeaponAndLevel(weapon, weaponDto.getLevel()).orElseThrow())
                .build()
        );
    }


    public List<WeaponLevel> getWeaponLevels(long id) {
        return weaponLevelsRepository.findByWeaponId(id);
    }
}
