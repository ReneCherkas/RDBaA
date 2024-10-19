package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "upping_level_of_weapon")
public class UppingLevelOfWeapon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "weapon_id")
    private Weapon weapon;

    @ManyToOne
    @JoinColumn(name = "level_id")
    private LevelOfWeapon levelOfWeapon;

}
