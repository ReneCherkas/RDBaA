package com.rdbaa.model;

import lombok.Data;

@Data
public class PointFromClient_weapon {
    private String name;
    private Double level;

    public PointFromClient_weapon(String name, Double level) {
        this.name = name;
        this.level = level;
    }
}
