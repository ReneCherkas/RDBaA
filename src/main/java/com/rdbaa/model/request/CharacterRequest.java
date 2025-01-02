package com.rdbaa.model.request;

import com.rdbaa.model.dto.CharacterDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CharacterRequest {
    private CharacterDto character;
}
