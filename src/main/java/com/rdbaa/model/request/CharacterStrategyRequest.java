package com.rdbaa.model.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CharacterStrategyRequest {
    private String characterName;
    private long newCharacterLevel;
    private long newCharacterAttackSkillLevel;
    private long newCharacterElementalSkillLevel;
    private long newCharacterElementalBurstLevel;
}
