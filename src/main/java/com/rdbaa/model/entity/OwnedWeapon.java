package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name = "ownedweapons")
public class OwnedWeapon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "weapon_id")
    private Weapon weapon;

    @ManyToOne
    @JoinColumn(name = "level_id")
    private WeaponLevel level;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;
}
