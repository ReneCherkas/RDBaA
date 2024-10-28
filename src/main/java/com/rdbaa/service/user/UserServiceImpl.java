package com.rdbaa.service.user;

import com.rdbaa.exception.WrongUsernameException;
import com.rdbaa.model.entity.User;
import com.rdbaa.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Pattern;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private static final Pattern usernamePattern = Pattern.compile(
            "[" +                   //начало списка допустимых символов
                    "а-яА-ЯёЁ" +    //буквы русского алфавита
                    "\\p{Punct}" +  //знаки пунктуации
                    "]" +                   //конец списка допустимых символов
                    "*");                   //допускается наличие указанных символов в любом количестве

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
    public User create(String username, String password) throws WrongUsernameException {
        if (usernamePattern.matcher(username).matches()) {
            throw new WrongUsernameException();
        }

        return userRepository.save(
                User.builder()
                        .username(username)
                        .password(bCryptPasswordEncoder.encode(password))
                        .build()
        );
    }
}
