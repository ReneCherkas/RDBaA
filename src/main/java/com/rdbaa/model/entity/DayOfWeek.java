package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name = "daysofweek")
public class DayOfWeek {

    @AllArgsConstructor
    @Getter
    @ToString
    public enum DayOfWeekEnum {
        MONDAY("пн"),
        TUESDAY("вт"),
        WEDNESDAY("ср"),
        THURSDAY("чт"),
        FRIDAY("пт"),
        SATURDAY("сб"),
        SUNDAY("вс");

        private final String ru;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private DayOfWeekEnum dayOfWeek;
}
