package com.rdbaa.model.dto;

import com.rdbaa.model.entity.ItemStack;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class StrategyPoint {
    private long dayNumber;
    private long dungeonId;
    private ItemStack items;
    private long originalResinAmount;
}
