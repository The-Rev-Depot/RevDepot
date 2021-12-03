package com.services;

import com.dao.UserDao;
import com.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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
     *
     * @param username
     * @return
     */
    @Override
    public User getUserByUsername(String username){
        return this.userDao.findUserByUsername(username).orElse(null);
    }

    /**
     *
     * @param email
     * @return
     */
    @Override
    public User getUserByEmail(String email) {
        return this.userDao.findUserByEmail(email).orElse(null);
    }
}
