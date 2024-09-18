package com.rdbaa.model;

import lombok.Data;

@Data
public class PointFromClient {
    private String name;
    private Double firstLevel;
    private Double secondLevel;
    private Double thirdLevel;

    public PointFromClient(String name, Double firstLevel, Double secondLevel, Double thirdLevel) {
        this.name = name;
        this.firstLevel = firstLevel;
        this.secondLevel = secondLevel;
        this.thirdLevel = thirdLevel;
    }
}
