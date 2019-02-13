package com.spring.jwt.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    private String password;

    @Column
    @Enumerated(EnumType.STRING)
    private UserRole role;

    public User(String username, String password, final UserRole role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public void applyChanges(final User inUser) {
        this.setUsername(inUser.getUsername());
        this.setRole(inUser.getRole());
        this.setPassword(inUser.getPassword());
    }
}
