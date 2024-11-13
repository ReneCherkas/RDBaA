package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @ManyToOne
    @JoinColumn(nullable = false)
    private DayOfWeek dayOfWeek;

    @ManyToOne
    @JoinColumn(nullable = false)
    private ItemStack itemStack;
}
