package com.spring.jwt.service.transformer;

import com.spring.jwt.model.User;
import com.spring.jwt.service.dto.UserListDto;
import org.springframework.stereotype.Component;


@Component
public class UserListTransformer {

    public UserListDto makeDto(final User user) {
        UserListDto dto = new UserListDto();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setRole(user.getRole().name());

        return dto;
    }
}
