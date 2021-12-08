package com.services;

import com.models.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();
    User createUser(User user);
    User getUserById(Integer userId);
    User getUserByUsername(String username);
    User getUserByEmail(String email);
    User login(User user);
}
