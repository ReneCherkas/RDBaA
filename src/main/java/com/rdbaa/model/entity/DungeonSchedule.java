package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.DayOfWeek;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name = "dungeonchedules")
public class DungeonSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Dungeon dungeon;

    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfWeek;

    @ManyToOne
    @JoinColumn(nullable = false)
    private ItemStack itemStack;
}
