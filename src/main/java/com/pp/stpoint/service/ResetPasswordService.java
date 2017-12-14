package com.pp.stpoint.service;

import com.pp.stpoint.entity.ResetPasswordToken;
import com.pp.stpoint.entity.User;

/**
 *
 * @author André Santos
 */
public interface ResetPasswordService {
    ResetPasswordToken resetPasswordRequest(User user);
    User resetPassword(String token);
    //!!
   // void remove(String token);
   // void removeUserTokens(User user);
}

