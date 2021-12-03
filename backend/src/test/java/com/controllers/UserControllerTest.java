package com.controllers;

import com.models.User;
import com.services.UserService;
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

    @Mock
    UserService userService;

    @BeforeEach
    void setUp() {
        this.userController = new UserController(userService);
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
        User expectedResult = new User(1, "test", "password", "Test", "Test",
                "test@test.com", null, null);
        //Mock
        Mockito.when(userService.createUser(expectedResult)).thenReturn(expectedResult);

        //Act
        User actualResult = this.userController.createUser(expectedResult);

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

        Mockito.when(userService.login(inputUser)).thenReturn(expectedResult);

        //Act
        User actualResult = this.userController.login(session, inputUser);

        //Assert
        assertEquals(expectedResult, actualResult);
        Mockito.verify(userService, Mockito.times(1)).login(inputUser);
    }

    @Test
    void checkSession() {
        //Assign
        HttpSession session = Mockito.mock(HttpSession.class);
        User expectedResult = new User(1, "test", "password", "Test", "Test",
                "test@test.com", null, null);
        session.setAttribute("userInSession", expectedResult);
        Mockito.when(session.getAttribute("userInSession")).thenReturn(expectedResult);

        //Act
        User actualResult = this.userController.checkSession(session);

        //Assert
        assertEquals(expectedResult, actualResult);
    }

    @Test
    void logout() {
        //Assign
        HttpSession session = Mockito.mock(HttpSession.class);
        User expectedResult = null;

        //Act
        User actualResult = this.userController.logout(session);

        //Assert
        assertEquals(expectedResult, actualResult);
    }
}