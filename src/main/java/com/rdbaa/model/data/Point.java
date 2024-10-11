package com.rdbaa.model.data;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "points")
public class Point {
    private @Id
    @GeneratedValue Long id;
    private String name;
    private Double firstLevel;
    private Double secondLevel;
    private Double thirdLevel;
    private String result;

    @ManyToOne
    private User user;

    public Point() {}

    public Point(String name, double firstLevel, double secondLevel, double thirdLevel, String result) {
        this.name = name;
        this.firstLevel = firstLevel;
        this.secondLevel = secondLevel;
        this.thirdLevel =thirdLevel;
        this.result = result;
    }

    public String toString() {
        return String.format("%s %s %s %s %s", name, firstLevel, secondLevel, thirdLevel, result);
    }
}
