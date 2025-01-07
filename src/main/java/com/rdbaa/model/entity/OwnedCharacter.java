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
@Table(name = "ownedcharacters")
public class OwnedCharacter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "character_id")
    private Character character;

    @ManyToOne
    @JoinColumn(name = "level_id")
    private CharacterLevel level;

    @ManyToOne
    @JoinColumn(name = "attack_level_id")
    private SkillLevel attackLevel;

    @ManyToOne
    @JoinColumn(name = "elemental_skill_level_id")
    private SkillLevel elementalSkillLevel;

    @ManyToOne
    @JoinColumn(name = "elemental_burst_level_id")
    private SkillLevel elementalBurstLevel;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;
}
