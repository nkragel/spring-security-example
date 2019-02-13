package com.spring.jwt.security.exception;

import org.springframework.security.core.AuthenticationException;

/**
 * @author n.kragel
 * @since 21.07.2016
 */
public class InvalidTokenAuthenticationException extends AuthenticationException {

    public InvalidTokenAuthenticationException(final String msg, final Throwable throwable) {
        super(msg, throwable);
    }

    public InvalidTokenAuthenticationException(final String msg) {
        super(msg);
    }

}
