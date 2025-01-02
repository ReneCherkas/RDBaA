package com.rdbaa.model.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WeaponStrategyRequest {
    private String weaponName;
    private long newWeaponLevel;
}
