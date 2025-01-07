package com.rdbaa.security;

import com.rdbaa.model.entity.User;
import com.rdbaa.repositories.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Base64;
import java.util.Objects;

@AllArgsConstructor
@Component
public class SimpleAuthorizationFilter extends OncePerRequestFilter {
    private static final Logger logger = LoggerFactory.getLogger(SimpleAuthorizationFilter.class);

    private final static String AUTHORIZATION_HEADER = "Authorization";
    private final static String SIMPLE_AUTHORIZATION_PREFIX = "Basic ";

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String authorizationHeader = request.getHeader(AUTHORIZATION_HEADER);
            if (Objects.nonNull(authorizationHeader) && authorizationHeader.startsWith(SIMPLE_AUTHORIZATION_PREFIX)) {
                String base64Credentials = authorizationHeader.substring(SIMPLE_AUTHORIZATION_PREFIX.length());
                String credentials = new String(Base64.getDecoder().decode(base64Credentials));
                String[] credentialsArray = credentials.split(":");
                String username = credentialsArray[0];
                String password = bCryptPasswordEncoder.encode(credentialsArray[1]);
                User user = userRepository.findByUsername(username).orElseThrow();
                if (password.equals(user.getPassword())) {
                    SecurityContextHolder.getContext().setAuthentication(
                            new UsernamePasswordAuthenticationToken(
                                    user,
                                    null
                            )
                    );
                }
            }

        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            logger.error("Cannot set user authentication: {}", e);
        }
        filterChain.doFilter(request, response);
    }
}
