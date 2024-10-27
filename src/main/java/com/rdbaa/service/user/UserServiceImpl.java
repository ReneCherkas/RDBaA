package com.rdbaa.service.user;

import com.rdbaa.model.entity.User;
import com.rdbaa.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }

    // Implementation of findByUsername
    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username); // Make sure this method exists in the repository
    }

    @Override
    public User create(String username, String password) {
        return userRepository.save(
                User.builder()
                        .username(username)
                        .password(bCryptPasswordEncoder.encode(password))
                        .build()
        );
    }
}
