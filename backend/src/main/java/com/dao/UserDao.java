package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserDao extends JpaRepository<User, Integer>{

    @Query("from User where username = :username")
    Optional<User> findUserByUsername(@Param("username")String username);

    @Query("from User where email = :email")
    Optional<User> findUserByEmail(@Param("email")String email);
    
    User findUserByUserId(int id);
}
