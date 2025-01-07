package com.rdbaa.model.response;

import com.rdbaa.model.dto.CharacterDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CharactersResponse {
    private List<CharacterDto> characters;
}
