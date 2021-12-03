package com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.CartDao;
import com.dao.UserDao;
import com.models.Cart;
import com.models.User;

@Service
public class CartServiceImpl implements CartService{
	
	private CartDao cartDao;
	private UserDao userDao;
	
	@Override
	public void update(Cart curCart) {
		Cart temp = cartDao.findCartByCartId(curCart.getCartId());
		temp.setItems(curCart.getItems());
		
		cartDao.save(temp);
	}
	
	@Override
    public User getUserById(int id) {
    	return this.userDao.findUserByUserId(id);
    }
	
	@Override
	public void add(Cart curCart) {		
		User tempUser = this.getUserById(curCart.getUser().getUserId());
		
		curCart.setUser(tempUser);
		curCart.setCartId(0);
		cartDao.save(curCart);
		
	}
	
	@Autowired
	public CartServiceImpl(CartDao cartDao, UserDao userDao) {
		this.cartDao = cartDao;
		this.userDao = userDao;
	}

	
}
