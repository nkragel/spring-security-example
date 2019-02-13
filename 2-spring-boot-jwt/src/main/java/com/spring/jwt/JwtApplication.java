package com.spring.jwt;

import com.spring.jwt.model.User;
import com.spring.jwt.model.UserRole;
import com.spring.jwt.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
@Import({SecurityConfiguration.class, WebConfiguration.class})
public class JwtApplication {

    public static void main(String[] args) {
        SpringApplication.run(JwtApplication.class, args);
    }

    @Bean
    CommandLineRunner bootstrap(final UserRepository userRepository, final PasswordEncoder passwordEncoder) {
        return (args) -> {
            userRepository.save(
                    new User("Peter", passwordEncoder.encode("password"), UserRole.ROLE_ADMIN)
            );

            userRepository.save(
                    new User("John", passwordEncoder.encode("password"), UserRole.ROLE_USER)
            );

            userRepository.findAll().stream().map(User::toString).forEach(System.out::println);
        };
    }
}
