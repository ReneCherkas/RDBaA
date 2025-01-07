package com.rdbaa.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class CharacterDto {
    private String name;
    private long level;
    private long attackLevel;
    private long elementalSkillLevel;
    private long elementalBurstLevel;
    private String levelUpDays;
}
