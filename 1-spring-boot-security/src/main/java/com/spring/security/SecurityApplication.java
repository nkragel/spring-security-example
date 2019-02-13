package com.spring.security;

import com.spring.security.model.User;
import com.spring.security.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SecurityApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecurityApplication.class, args);
    }

    @Bean
    public CommandLineRunner bootstrap(UserRepository repository, PasswordEncoder passwordEncoder) {
        return (args) -> {
            // save a couple of customers
            repository.save(new User("Jack", passwordEncoder.encode("password")));
            repository.save(new User("Chloe", passwordEncoder.encode("password")));
            repository.save(new User("Kim", passwordEncoder.encode("password")));
            repository.save(new User("David", passwordEncoder.encode("password")));
            repository.save(new User("Michelle", passwordEncoder.encode("password")));
        };
    }
}
