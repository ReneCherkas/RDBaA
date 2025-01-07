package com.rdbaa.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class StrategyPoint {
    private LocalDate date;
    private String dungeonName;
    private String itemName;
    private long tryingCount;
}
