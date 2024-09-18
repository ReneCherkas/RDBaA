package com.rdbaa.model.data;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    private String username;

    private String password;

    @Transient
    private String passwordConfirm;

}
