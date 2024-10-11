package com.rdbaa.model.data;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "dates")
public class Date {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "days", nullable = false)
    private String days;
}
