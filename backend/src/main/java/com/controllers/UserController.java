package com.controllers;

import com.models.Response;
import com.models.User;
import com.services.UserService;
import com.utility.EmailService;
import com.utility.JwtUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("revdepot")
@CrossOrigin(value="http://localhost:4200", allowCredentials = "true")
public class UserController {
    private UserService userService;
    private JwtUtility jwtUtility;
    private EmailService emailService;

    @Autowired
    public UserController(UserService userService, JwtUtility jwtUtility, EmailService emailService) {
        this.userService = userService;
        this.jwtUtility = jwtUtility;
        this.emailService = emailService;
    }

    /**
     * Method used to get all the List of Users in the system
     *
     * @return - List of Users (object)
     */
    @GetMapping("user")
    public Response getAllUser() {
        return new Response(true, "Listing All Users", this.userService.getAllUsers());
    }

    /**
     * Method used to register a new user account
     *
     * @param user - User Object which contains all the required (non-nullable) values
     * @return - Return the User object which successfully added to the system.
     */
    @PostMapping("user")
    public Response createUser(@RequestBody User user) {
        User currentUser = this.userService.createUser(user);
        if (currentUser == null) {
            return new Response(false, "Failed to create a new user", null);
        } else {
            EmailService.sendEmail(currentUser, "new");
            return new Response(true, jwtUtility.genToken(currentUser), currentUser);
        }
    }

    /**
     * Method used to login to the system as User with the account detail requirement
     *
     * @param user - User object which primarily contain username/email and password
     * @return - Returns the User object who successfully log-in Else return null that encoded into JWT token
     */
    //Checks to see if user is in database otherwise it'll reject their log in
    @PostMapping("login")
    public Response login(@RequestBody User user) {
        User currentUser = this.userService.login(user);
        System.out.println(currentUser);
        if (currentUser == null) {
            return new Response(false, "Failure to login", null);
        } else {
            return new Response(true, jwtUtility.genToken(currentUser), currentUser);
        }
    }
    
    
    /**
     * Method used to get user using the userId as input
     *
     * @param userId - userId for the user to retrieve
     * @return - Returns the JWT token including the User Object into its payload
     */
    @GetMapping("user/{id}")
    public Response getUserById(@PathVariable Integer userId) {
        User currentUser = this.userService.getUserById(userId);
        if (currentUser == null) {
            return new Response(false, "Cannot find user with id " + userId, null);
        } else {
            return new Response(true, jwtUtility.genToken(currentUser), currentUser);
        }
    }

    /**
     * Method used to get user using the username as input
     *
     * @param username - username for the user to retrieve
     * @return - Returns the JWT token including the User Object into its payload
     */
    @GetMapping("user/username/{username}")
    public Response getUserByUsername(@PathVariable String username) {
        User currentUser = this.userService.getUserByUsername(username);
        if (currentUser == null) {
            return new Response(false, "Cannot find user with username " + username, null);
        } else {
            return new Response(true, jwtUtility.genToken(currentUser), currentUser);
        }
    }

    /**
     * Method used to get user using the email as input
     *
     * @param email - email for the user to retrieve
     * @return - Returns the JWT token including the User Object into its payload
     */
    @GetMapping("user/email/{email}")
    public Response getUserByEmail(@PathVariable String email) {
        User currentUser = this.userService.getUserByEmail(email);
        if (currentUser == null) {
            return new Response(false, "Cannot find user with email " + email, null);
        } else {
            return new Response(true, jwtUtility.genToken(currentUser), currentUser);
        }
    }

}