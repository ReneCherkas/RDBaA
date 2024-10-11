package com.rdbaa.model;

import com.rdbaa.model.entity.User;
import lombok.Data;

@Data
public class PointForClient_weapon {
    private String name;
    private Double level;
    private String result;
    private User user;

    public PointForClient_weapon(String name, Double level, String result, User user) {
        this.name = name;
        this.level = level;
        this.result = result;
        this.user = user;
    }
}
