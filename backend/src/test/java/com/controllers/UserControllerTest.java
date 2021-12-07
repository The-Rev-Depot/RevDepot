package com.controllers;

import com.models.Response;
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
        List<User>  users = new ArrayList<>();
        users.add(new User(1, "test", "test", "Test", "Test", "test@mail.com",  null, null));
        Response expectedResult = new Response(true, "Listing All Users", users);

        //mock
        Mockito.when(userService.getAllUsers()).thenReturn(users);

        //act
        Response actualResult = this.userController.getAllUser();

        //assert
        assertEquals(expectedResult, actualResult);
    }

    @Test
    void createUser() {
        //Assign
        JwtUtility jwt = Mockito.mock(JwtUtility.class);
        User user = new User(1, "roel", "password", "Roel", "Crodua",
                "test@test.com", null, null);
        Response expectedResult = new Response(false, "Failed to create a new user", null);
        //Mock
        Mockito.when(userService.createUser(user)).thenReturn(null);
        Mockito.when(jwt.genToken(user)).thenReturn("user");

        //Act
        Response actualResult = this.userController.createUser(user);
        //Assert
        assertEquals(expectedResult, actualResult);
        Mockito.verify(userService, Mockito.times(1)).createUser(user);

    }

    @Test
    void login() {
        //Assign
        JwtUtility jwt = Mockito.mock(JwtUtility.class);
        User user = new User(1, "roel", "password", "Roel", "Crodua",
                "test@test.com", null, null);
        Response expectedResult = new Response(false, "Failure to login", null);
        //Mock
        Mockito.when(userService.login(user)).thenReturn(null);
        Mockito.when(jwt.genToken(user)).thenReturn("user");

        //Act
        Response actualResult = this.userController.login(user);
        //Assert
        assertEquals(expectedResult, actualResult);
        Mockito.verify(userService, Mockito.times(1)).login(user);
    }

    @Test
    void getUserById() {
        //assign
        User user = new User(1, "roel", "password", "Roel", "Crodua",
                "test@test.com", null, null);
        Response expectedResult = new Response(false, "Cannot find user with id " + user.getUserId(), null);

        //Mock
        Mockito.when(userService.getUserById(user.getUserId())).thenReturn(null);

        //act
        Response actualResult = this.userController.getUserById(user.getUserId());

        //assert
        assertEquals(expectedResult.toString(), actualResult.toString());
    }

    @Test
    void getUserByUsername() {
        //assign
        User user = new User(1, "roel", "password", "Roel", "Crodua",
                "test@test.com", null, null);
        Response expectedResult = new Response(false, "Cannot find user with username " + user.getUsername(), null);

        //Mock
        Mockito.when(userService.getUserByUsername(user.getUsername())).thenReturn(null);

        //act
        Response actualResult = this.userController.getUserByUsername(user.getUsername());

        //assert
        assertEquals(expectedResult.toString(), actualResult.toString());
    }

    @Test
    void getUserByEmail() {
        //assign
        User user = new User(1, "roel", "password", "Roel", "Crodua",
                "test@test.com", null, null);
        Response expectedResult = new Response(false, "Cannot find user with email " + user.getEmail(), null);

        //Mock
        Mockito.when(userService.getUserByEmail(user.getEmail())).thenReturn(null);

        //act
        Response actualResult = this.userController.getUserByEmail(user.getEmail());

        //assert
        assertEquals(expectedResult.toString(), actualResult.toString());
    }
}