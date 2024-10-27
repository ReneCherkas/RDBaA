package com.rdbaa.service.user;

import com.rdbaa.model.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService extends UserDetailsService {
    User save(User user);

    Optional<User> findByUsername(String username);

    User create(String username, String password);
}
