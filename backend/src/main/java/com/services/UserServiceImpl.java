package com.services;

import com.dao.UserDao;
import com.models.User;
import com.utility.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private UserDao userDao;
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public UserServiceImpl (UserDao userDao){
        this.userDao = userDao;
    }

    /**
     * Method used to get all the List of Users in the system
     *
     * @return  - List of Users (object)
     */
    @Override
    public List<User> getAllUsers() {
        List<User> users = this.userDao.findAll();
        // removing the password for security purposes which will be sent to front-end
        for(User a : users){
            a.setPassword(null);
        }
        return users;
    }

    /**
     * Method used to register a new user account
     *
     * @param user  - User Object which contains all the required (non-nullable) values
     * @return      - Return the User object which successfully added to the system.
     */
    @Override
    public User createUser(User user) {
        Optional<User> temp = this.userDao.findUserByUsername(user.getUsername());
        if(!temp.isPresent()) {
            // If user is NOT found, encrypt/encode the raw password into hash value and save to the database
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            return this.userDao.save(user);
        }
        return null;
    }

    /**
     * Retrieves a user that matches the username passed to the method.
     *
     * @param username  - username of the user to be retrieved
     * @return          - returns the User object matching the username
     */
    @Override
    public User getUserByUsername(String username){
        return this.userDao.findUserByUsername(username).orElse(null);
    }

    /**
     * Retrieves a user that matches the email passed to the method.
     *
     * @param email     - email of the user to be retrieved
     * @return          - returns the User object matching the email
     */
    @Override
    public User getUserByEmail(String email) {
        User user = this.userDao.findUserByEmail(email).orElse(null);
        user.setPassword(null);
        return user;
    }

    /**
     * Retrieves a user that matches the userId passed to the method.
     *
     * @param userId     - userId of the user to be retrieved
     * @return          - returns the User object matching the userId
     */
    @Override
    public User getUserById(Integer userId){
        User user =  this.userDao.findById(userId).orElse(null);
        user.setPassword(null);
        return user;
    }
    /**
     * Method to log the user into the website
     *
     * @param user  the user object that is signing into the website
     * @return      returns the user object
     */
    @Override
    public User login(User user) {
        try {
            User currentUser;
            if (!user.getUsername().isEmpty()){
                currentUser = this.userDao.findUserByUsername(user.getUsername()).orElse(null);
            } else if (!user.getEmail().isEmpty()){
                currentUser = this.userDao.findUserByEmail(user.getEmail()).orElse(null);
            } else {
                currentUser = null;
            }

            if (currentUser == null){
                return null;
            } else {
                // This method will check if the input user password matches the hashed value of the currentUser password
                // This method can be eliminated if JWT is used.
                if (BCrypt.checkpw(user.getPassword(), currentUser.getPassword())) {
                    return currentUser;
                } else {
                    return null; // password is INCORRECT/INVALID
                }
            }
        } catch(Exception ex){
            return null;
        }
    }

    /**
     * Used to generate a new, random password that is visible to the user in the email they receive after
     * selecting "Forgot Password?" on the front end, and opening the email that they receive.
     *
     * @return  a string representing the user's new password used to sign into the front end
     */
    @Override
    public String newPassword(String email){
        final String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder();

        for(int i = 0; i<10; i++){
            int randomIndex = random.nextInt(chars.length());
            sb.append(chars.charAt(randomIndex));
        }
        User newUser = new User();
        newUser.setEmail(email);
        newUser.setPassword(sb.toString());
        EmailService.sendEmail(newUser, "forgot");
        return sb.toString();
    }
}
