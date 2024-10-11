package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "weapon")
public class Weapon {
    private @Id
    @GeneratedValue Long id;
    private String name;
    private Double level;
    private String result;

    @ManyToOne
    private User user;

    public Weapon() {}

    public Weapon(String name, double level, String result) {
        this.name = name;
        this.level = level;
        this.result = result;
    }

    public String toString() {
        return String.format("%s %s %s", name, level, result);
    }
}
