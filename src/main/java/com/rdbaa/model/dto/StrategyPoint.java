package com.rdbaa.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class StrategyPoint {
    private Date date;
    private String dungeonName;
    private String itemName;
    private long tryingCount;
}
