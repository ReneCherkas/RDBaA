package com.rdbaa.model;

import com.rdbaa.model.data.User;
import lombok.Data;

@Data
public class PointForClient {
    private String name;
    private Double firstLevel;
    private Double secondLevel;
    private Double thirdLevel;
    private String result;
    private User user;

    public PointForClient(String name, Double firstLevel, Double secondLevel, Double thirdLevel, String result, User user) {
        this.name = name;
        this.firstLevel = firstLevel;
        this.secondLevel = secondLevel;
        this.thirdLevel = thirdLevel;
        this.result = result;
        this.user = user;
    }
}
