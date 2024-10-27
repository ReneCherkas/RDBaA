package com.rdbaa.service;

import com.rdbaa.model.data.User;

public interface UserService {
    User save(User user);

    User findByUsername(String username);
}
