package com.rdbaa.service;

import com.rdbaa.model.data.Character;
import com.rdbaa.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DayOfWeekService {

    private final CharacterRepository characterRepository;

    @Autowired
    public DayOfWeekService(CharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    public String isDay(String characterName) {
        Character character = characterRepository.findByName(characterName);

        if (character != null && !character.getResourcesForTalents().isEmpty()) {
            return character.getResourcesForTalents().get(0).getResource().getGettingResources().get(0).getDate().getDays();
        } else {
            return "Данные о дате получения не найдены";
        }
    }
}
