package com.rdbaa.model.data;

import lombok.Data;
import javax.persistence.*;

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
