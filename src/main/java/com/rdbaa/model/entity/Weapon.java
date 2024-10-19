package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
@Table(name = "weapon")
public class Weapon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private Double level;
    private String result;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "weapon")
    private List<UppingLevelOfWeapon> uppingLevels;  // Связь с уровнями прокачки

    public Weapon() {}

    public Weapon(String name, double level, String result) {
        this.name = name;
        this.level = level;
        this.result = result;
    }

    @Override
    public String toString() {
        return String.format("%s %s %s", name, level, result);
    }
}
