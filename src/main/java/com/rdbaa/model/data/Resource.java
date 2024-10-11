package com.rdbaa.model.data;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "resources")
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "id_dungeon")
    private Dungeon dungeon;

    @OneToMany(mappedBy = "resource")
    private List<GettingResource> gettingResources;
}
