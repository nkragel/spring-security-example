package com.spring.jwt.security.exception;

import org.springframework.security.core.AuthenticationException;

/**
 * @author n.kragel
 * @since 21.07.2016
 */
public class ExpiredTokenAuthenticationException extends AuthenticationException {

    public ExpiredTokenAuthenticationException() {
        super("Authentication token is expired.");
    }
}
