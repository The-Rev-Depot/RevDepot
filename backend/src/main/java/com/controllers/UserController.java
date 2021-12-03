package com.controllers;

import com.models.User;
import com.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import org.springframework.security.crypto.bcrypt.BCrypt;

@RestController
@RequestMapping("api")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
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
    public User createUser(@RequestBody User user){
        return this.userService.createUser(user);
    }

    /**
     * Method used to login to the system as User with the account detail requirement
     * @param session   - User object that holds the current login user information, could be empty if logout
     * @param user      - User object which primarily contain username/email and password
     * @return          - Returns the User object who successfully log-in Else return null.
     */
    //Checks to see if user is in database otherwise it'll reject their log in
    @PostMapping("login")
    public User login(HttpSession session, @RequestBody User user) {
            User currentUser = this.userService.login(user);
            if (currentUser == null){
                return null;
            } else {
                session.setAttribute("userInSession", currentUser);
                return currentUser;
            }
    }

    /**
     * This will check if the current user is currently login in session
     *
     * @param session  -the sessionUser data currently login
     * @return  User   -returns the User object with updated information
     */
    @GetMapping("check-session")
    public User checkSession(HttpSession session) {
        return (User) session.getAttribute("userInSession");
    }

    /**
     * Method that will delete/remove the current user login session
     *
     * @param session   - User currently login
     * @return          - null or empty User
     */
    @GetMapping("logout")
    public User logout(HttpSession session) {
        session.setAttribute("userInSession", null);
        return null;
    }

}
