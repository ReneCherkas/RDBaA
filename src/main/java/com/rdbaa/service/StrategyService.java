package com.rdbaa.service;

import com.rdbaa.exception.CharacterDoesntExistsException;
import com.rdbaa.exception.WeaponDoesntExistsException;
import com.rdbaa.model.dto.StrategyPoint;
import com.rdbaa.model.entity.Character;
import com.rdbaa.model.entity.*;
import com.rdbaa.repositories.*;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.*;

@Service
@AllArgsConstructor
public class StrategyService {
    private final OwnedCharacterRepository ownedCharacterRepository;
    private final OwnedWeaponRepository ownedWeaponRepository;
    private final WeaponLevelsRepository weaponLevelsRepository;
    private final CharacterLevelRepository characterLevelRepository;
    private final DungeonScheduleRepository dungeonScheduleRepository;
    private final CharacterRepository characterRepository;
    private final WeaponRepository weaponRepository;

    public List<StrategyPoint> strategyPoints(String name, Long newLevel) throws CharacterDoesntExistsException, WeaponDoesntExistsException {
        Optional<Character> characterOptional = characterRepository.findByName(name);
        if (characterOptional.isPresent()) {
            return characterStrategy(characterOptional.get(), newLevel);
        }
        Optional<Weapon> weaponOptional = weaponRepository.findByName(name);
        if (weaponOptional.isPresent()) {
            return weaponStrategy(weaponOptional.get(), newLevel);
        }
        throw new IllegalArgumentException("No such character or weapon");
    }


    private List<StrategyPoint> characterStrategy(Character character, Long newLevel) throws CharacterDoesntExistsException {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        OwnedCharacter ownedCharacter = ownedCharacterRepository.findByOwnerUsernameAndCharacterName(user.getUsername(), character.getName()).orElseThrow(CharacterDoesntExistsException::new);
        HashMap<Item, Long> items = new HashMap<>();
        for (long lvl = ownedCharacter.getLevel().getLevel(); lvl <= newLevel; lvl++) {
            CharacterLevel characterLevel = characterLevelRepository.findByCharacterAndLevel(ownedCharacter.getCharacter(), lvl).orElseThrow();
            for (ItemStack item : characterLevel.getNeeds()) {
                if (items.containsKey(item.getItem()))
                    items.put(item.getItem(), items.get(item.getItem()) + item.getCount());
                else items.put(item.getItem(), item.getCount());
            }
        }
        return strategyByItems(items);
    }

    private List<StrategyPoint> weaponStrategy(Weapon weapon, Long newLevel) throws WeaponDoesntExistsException {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        OwnedWeapon ownedWeapon = ownedWeaponRepository.findByOwnerUsernameAndWeaponName(user.getUsername(), weapon.getName()).orElseThrow(WeaponDoesntExistsException::new);
        HashMap<Item, Long> items = new HashMap<>();
        for (long lvl = ownedWeapon.getLevel().getLevel(); lvl <= newLevel; lvl++) {
            WeaponLevel weaponLevel = weaponLevelsRepository.findByWeaponAndLevel(ownedWeapon.getWeapon(), lvl).orElseThrow();
            for (ItemStack item : weaponLevel.getNeeds()) {
                if (items.containsKey(item.getItem()))
                    items.put(item.getItem(), items.get(item.getItem()) + item.getCount());
                else items.put(item.getItem(), item.getCount());
            }
        }
        return strategyByItems(items);
    }

    private EnumMap<DayOfWeek, List<DungeonSchedule>> scheduleHashMap(Set<Item> items) {
        EnumMap<DayOfWeek, List<DungeonSchedule>> schedule = new EnumMap<>(DayOfWeek.class);
        for (Item item : items) {
            dungeonScheduleRepository.findAllByItemStackItemName(item.getName()).forEach(dungeonSchedule -> {
                if (!schedule.containsKey(dungeonSchedule.getDayOfWeek())) {
                    schedule.put(dungeonSchedule.getDayOfWeek(), new ArrayList<>());
                }
                schedule.get(dungeonSchedule.getDayOfWeek()).add(dungeonSchedule);
            });
        }
        return schedule;
    }

    private List<StrategyPoint> strategyByItems(HashMap<Item, Long> items) {
        final long resinRespawnMinutesPeriod = 8L;
        final long resinPerDay = (24L * 60L) / resinRespawnMinutesPeriod;
        final long resinPerTry = 20L;
        final long resinMaxValue = 200L;
        long currentResin = 200L;

        LocalDate date = LocalDate.now();
        DayOfWeek today = DayOfWeek.values()[date.getDayOfWeek().ordinal()];

        EnumMap<DayOfWeek, List<DungeonSchedule>> schedule = scheduleHashMap(items.keySet());
        List<StrategyPoint> strategyPoints = new ArrayList<>();

        while (!items.isEmpty()) {
            for (DungeonSchedule dungeonSchedule : schedule.get(today)) {
                if (items.containsKey(dungeonSchedule.getItemStack().getItem())) {
                    long needItemCount = items.get(dungeonSchedule.getItemStack().getItem());
                    long farmItemCount = dungeonSchedule.getItemStack().getCount();
                    long count = Math.min((needItemCount + farmItemCount - 1) / farmItemCount, currentResin / resinPerTry);
                    currentResin -= count * resinPerTry;
                    if (farmItemCount * count >= needItemCount) {
                        items.remove(dungeonSchedule.getItemStack().getItem());
                    } else {
                        items.put(dungeonSchedule.getItemStack().getItem(), needItemCount - count * farmItemCount);
                    }
                    if (count > 0) {
                        strategyPoints.add(StrategyPoint.builder()
                                .date(date)
                                .dungeonName(dungeonSchedule.getDungeon().getName())
                                .itemName(dungeonSchedule.getItemStack().getItem().getName())
                                .tryingCount(count)
                                .build()
                        );
                    }
                }
            }
            today = today.plus(1);
            currentResin = Math.min(200L, currentResin + resinPerDay);
        }
        return strategyPoints;
    }
}
