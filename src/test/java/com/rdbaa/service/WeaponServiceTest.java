package com.rdbaa.service;

import com.rdbaa.exception.WeaponAlreadyExistsException;
import com.rdbaa.exception.WeaponDoesntExistsException;
import com.rdbaa.model.dto.WeaponDto;
import com.rdbaa.repositories.OwnedWeaponRepository;
import com.rdbaa.repositories.WeaponLevelsRepository;
import com.rdbaa.repositories.WeaponRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Pageable;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class WeaponServiceTest extends TestBase {

    WeaponService service;
    @Mock
    WeaponLevelsRepository weaponLevelsRepositoryMock;
    @Mock
    OwnedWeaponRepository ownedWeaponRepositoryMock;
    @Mock
    WeaponRepository weaponRepositoryMock;

    @BeforeEach
    void setUp() {
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(
                        testUser,
                        null
                )
        );
        Mockito.reset(weaponRepositoryMock, ownedWeaponRepositoryMock, weaponLevelsRepositoryMock);
        service = new WeaponService(weaponLevelsRepositoryMock, ownedWeaponRepositoryMock, weaponRepositoryMock);
    }

    @Test
    void getAllByUser_NoWeapons() {
        Mockito.when(ownedWeaponRepositoryMock.findAllByOwnerUsername(testUser.getUsername(), Pageable.ofSize(10).withPage(1)))
                .thenReturn(new ArrayList<>());
        Assertions.assertTrue(
                service.getAllByUser(1, 10).isEmpty()
        );
    }

    @Test
    void getAllByUser_OneWeapon() {
        Mockito.when(ownedWeaponRepositoryMock.findAllByOwnerUsername(testUser.getUsername(), Pageable.ofSize(10).withPage(1)))
                .thenReturn(List.of(testOwnedWeapon));
        Assertions.assertEquals(1, service.getAllByUser(1, 10).size());
    }

    @Test
    void createWeapon_AlreadyExistsException() {
        Mockito.when(ownedWeaponRepositoryMock.findByOwnerUsernameAndWeaponName(testUser.getUsername(), testWeapon.getName()))
                .thenReturn(Optional.of(testOwnedWeapon));
        Assertions.assertThrows(WeaponAlreadyExistsException.class, () -> service.createWeapon(
                        WeaponDto.builder()
                                .name(testWeapon.getName())
                                .level(testWeaponLevel.getLevel())
                                .build()
                )
        );
    }

    @Test
    void createWeapon_SuccessCreate() {
        Mockito.when(ownedWeaponRepositoryMock.findByOwnerUsernameAndWeaponName(testUser.getUsername(), testWeapon.getName()))
                .thenReturn(Optional.empty());
        Mockito.when(weaponRepositoryMock.findByName(testWeapon.getName()))
                .thenReturn(Optional.of(testWeapon));
        Mockito.when(weaponLevelsRepositoryMock.findByWeaponAndLevel(testWeapon, testWeaponLevel.getLevel()))
                .thenReturn(Optional.of(testWeaponLevel));
        try {
            service.createWeapon(
                    WeaponDto.builder()
                            .name(testWeapon.getName())
                            .level(testWeaponLevel.getLevel())
                            .build()
            );
        } catch (WeaponAlreadyExistsException | WeaponDoesntExistsException e) {
            Assertions.fail();
        }
    }

    @Test
    void modifyWeapon_SuccessModify() {
        Mockito.when(ownedWeaponRepositoryMock.findByOwnerUsernameAndWeaponName(testUser.getUsername(), testWeapon.getName()))
                .thenReturn(Optional.of(testOwnedWeapon));
        Mockito.when(weaponRepositoryMock.findByName(testWeapon.getName()))
                .thenReturn(Optional.of(testWeapon));
        Mockito.when(weaponLevelsRepositoryMock.findByWeaponAndLevel(testWeapon, testWeaponLevel.getLevel()))
                .thenReturn(Optional.of(testWeaponLevel));
        try {
            service.modifyWeapon(
                    WeaponDto.builder()
                            .name(testWeapon.getName())
                            .level(testWeaponLevel.getLevel())
                            .build()
            );
        } catch (WeaponDoesntExistsException e) {
            Assertions.fail();
        }
    }

    @Test
    void modifyWeapon_DoesntExistsException() {
        Mockito.when(ownedWeaponRepositoryMock.findByOwnerUsernameAndWeaponName(testUser.getUsername(), testWeapon.getName()))
                .thenReturn(Optional.empty());
        Assertions.assertThrows(WeaponDoesntExistsException.class, () -> service.modifyWeapon(
                        WeaponDto.builder()
                                .name(testWeapon.getName())
                                .level(testWeaponLevel.getLevel())
                                .build()
                )
        );
    }
}