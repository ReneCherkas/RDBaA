package com.rdbaa.service.user;

import com.rdbaa.model.data.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User save(User user);
}
