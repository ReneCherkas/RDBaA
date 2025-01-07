package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name = "weaponlevels")
public class WeaponLevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Weapon weapon;

    @Column(nullable = false)
    private Long level;

    @ManyToMany
    @JoinTable(
            name = "weaponlevel_itemstack",
            joinColumns = @JoinColumn(name = "weapon_id"),
            inverseJoinColumns = @JoinColumn(name = "itemstack_id")
    )
    private List<ItemStack> needs;
}
