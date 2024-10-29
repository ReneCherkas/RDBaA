package com.rdbaa.service;

import com.rdbaa.model.entity.Character;
import com.rdbaa.repositories.CharacterRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CharacterService {

    private final CharacterRepository characterRepository;

    public List<Character> getAll(int pageNumber, int pageSize) {
        return characterRepository.findAll(Pageable.ofSize(pageSize).withPage(pageNumber)).toList();
    }
}
