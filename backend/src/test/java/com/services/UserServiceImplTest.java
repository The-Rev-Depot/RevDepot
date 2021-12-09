package com.services;

import com.controllers.UserController;
import com.dao.UserDao;
import com.models.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.servlet.http.HttpSession;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {
    UserService userService;
    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Mock
    UserDao userDao;

    @BeforeEach
    void setUp() {
        this.userService = new UserServiceImpl(userDao);

    }

    @Test
    void getAllUsers() {
        //Assign
        List<User> expectedResult = new ArrayList<>();
        expectedResult.add(new User(1, "user", "password", "test@test.com", "User", "Test", null, null));

        Mockito.when(userDao.findAll()).thenReturn(expectedResult);

        //Act
        List<User> actualResult = this.userService.getAllUsers();

        //Assert
        assertEquals(expectedResult, actualResult);

        //Verify
        Mockito.verify(userDao, Mockito.times(1)).findAll();
    }

    @Test
    void createUser() {
        //Assign
        User expectedResult = new User(1, "user", "password", "User", "Test", "test@test.com", null, null);

        Mockito.when(userDao.save(expectedResult)).thenReturn(expectedResult);

        //Act
        User actualResult = this.userService.createUser(expectedResult);

        //Assert
        assertEquals(expectedResult, actualResult);

        //Verify
        Mockito.verify(userDao, Mockito.times(1)).save(expectedResult);

    }

    @Test
    void getUserByUsername() {
        //Assign
        User expectedResult = new User(1, "test", "password", "Test", "Test",
                "test@test.com",  null, null);
        Mockito.when(userDao.findUserByUsername(expectedResult.getUsername())).thenReturn(Optional.of(expectedResult));

        //Act
        User actualResult = this.userService.getUserByUsername(expectedResult.getUsername());

        //Assert
        assertEquals(expectedResult, actualResult);
    }

    @Test
    void getUserByEmail() {
        //Assign
        User expectedResult = new User(1, "test", "password", "Test", "Test",
                "test@test.com",  null, null);
        Mockito.when(userDao.findUserByEmail(expectedResult.getEmail())).thenReturn(Optional.of(expectedResult));

        //Act
        User actualResult = this.userService.getUserByEmail(expectedResult.getEmail());

        //Assert
        assertEquals(expectedResult, actualResult);
    }

    @Test
    void login() {
        //Assign
        HttpSession session = Mockito.mock(HttpSession.class);
        User expectedResult = null;
        User inputUser = new User(1, "test", "password", "Test", "Test",
                "test@test.com", null, null);

        Mockito.when(userDao.findUserByUsername(inputUser.getUsername())).thenReturn(Optional.of(inputUser));

        //Act
        User actualResult = this.userService.login(inputUser);

        //Assert
        assertEquals(expectedResult, actualResult);
        Mockito.verify(userDao, Mockito.times(1)).findUserByUsername(inputUser.getUsername());
    }
}