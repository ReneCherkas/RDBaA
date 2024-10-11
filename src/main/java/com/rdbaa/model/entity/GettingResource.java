package com.rdbaa.model.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "getting_resources")
public class GettingResource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_resources")
    private Resource resource;

    @ManyToOne
    @JoinColumn(name = "id_date")
    private Date date;
}
