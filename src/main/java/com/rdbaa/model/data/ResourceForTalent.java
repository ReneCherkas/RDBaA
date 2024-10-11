package com.rdbaa.model.data;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "resources_for_talents")
public class ResourceForTalent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_talents")
    private Character character;

    @ManyToOne
    @JoinColumn(name = "id_resources")
    private Resource resource;
}
