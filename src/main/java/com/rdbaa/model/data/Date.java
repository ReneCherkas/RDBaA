package com.rdbaa.model.data;

import lombok.Data;
import javax.persistence.*;

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
