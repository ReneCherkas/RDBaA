package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name = "weapontypes")
public class WeaponType {

    public enum WeaponTypeEnum {
        SWORD, BOW, CATALYST, POLEARM, CLAYMORE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private WeaponTypeEnum skillType;
}
