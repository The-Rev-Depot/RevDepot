package com.controllers;

import com.models.User;
import com.services.UserService;
import com.utility.JwtUtility;
import org.apache.tomcat.util.codec.binary.Base64;
import org.apache.tomcat.util.codec.binary.StringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserControllerTest {
    UserController userController;
    JwtUtility jwtUtility;

    @Mock
    UserService userService;

    @BeforeEach
    void setUp() {
        this.userController = new UserController(userService, jwtUtility);
    }

    @Test
    void getAllUser() {
        //assign
        List<User> expectedResult = new ArrayList<>();
        expectedResult.add(new User(1, "test", "test", "Test", "Test", "test@mail.com",  null, null));

        //mock
        Mockito.when(userService.getAllUsers()).thenReturn(expectedResult);

        //act
        List<User> actualResult = this.userController.getAllUser();

        //assert
        assertEquals(expectedResult, actualResult);
    }

    @Test
    void createUser() {
//Assign
        JwtUtility jwt = Mockito.mock(JwtUtility.class);
        String expectedResult = null;
        User inputUser = new User(1, "test", "password", "Test", "Test",
                "test@test.com", null, null);

        Mockito.when(userService.createUser(inputUser)).thenReturn(null);
        Mockito.when(jwt.genToken(inputUser)).thenReturn("testing");

        //Act
        String actualResult = this.userController.createUser(inputUser);
        //Assert
        assertEquals(expectedResult, actualResult);
        Mockito.verify(userService, Mockito.times(1)).createUser(inputUser);

    }

    @Test
    void login() {
        //Assign
        JwtUtility jwt = Mockito.mock(JwtUtility.class);
        String expectedResult = null;
        User inputUser = new User(1, "test", "password", "Test", "Test",
                "test@test.com", null, null);

        Mockito.when(userService.login(inputUser)).thenReturn(null);
        Mockito.when(jwt.genToken(inputUser)).thenReturn("testing");

        //Act
        String actualResult = this.userController.login(inputUser);
        //Assert
        assertEquals(expectedResult, actualResult);
        Mockito.verify(userService, Mockito.times(1)).login(inputUser);
    }

}