package com.controllers;

import com.models.User;
import com.services.UserService;
import com.utility.JwtUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import org.springframework.security.crypto.bcrypt.BCrypt;

@RestController
@RequestMapping("api")
public class UserController {
    private UserService userService;
    private JwtUtility jwtUtility;

    @Autowired
    public UserController(UserService userService, JwtUtility jwtUtility){
        this.userService = userService;
        this.jwtUtility = jwtUtility;
    }

    /**
     * Method used to get all the List of Users in the system
     *
     * @return  - List of Users (object)
     */
    @GetMapping("user")
    public List<User> getAllUser(){
        return this.userService.getAllUsers();
    }

    /**
     * Method used to register a new user account
     *
     * @param user  - User Object which contains all the required (non-nullable) values
     * @return      - Return the User object which successfully added to the system.
     */
    @PostMapping("user")
    public String createUser(@RequestBody User user){
        User currentUser = this.userService.createUser(user);
        if (currentUser == null){
            return null;
        } else {
            return jwtUtility.genToken(currentUser);
        }
    }

    /**
     * Method used to login to the system as User with the account detail requirement
     * @param user      - User object which primarily contain username/email and password
     * @return          - Returns the User object who successfully log-in Else return null.
     */
    //Checks to see if user is in database otherwise it'll reject their log in
    @PostMapping("login")
    public String login(@RequestBody User user) {
            User currentUser = this.userService.login(user);
            if (currentUser == null){
                return null;
            } else {
                return jwtUtility.genToken(currentUser);
            }
    }


}
