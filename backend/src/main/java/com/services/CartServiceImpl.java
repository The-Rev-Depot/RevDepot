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
	public void updateCart(Cart curCart) {
		Cart tempCart = cartDao.findByCartId(curCart.getCartId());
		tempCart.setItems(curCart.getItems());
		User tempUser = this.getUserById(curCart.getUser().getUserId());
		
		tempCart.setUser(tempUser);
		
		cartDao.save(tempCart);
	}
	
	@Override
    public User getUserById(int id) {
    	return this.userDao.findUserByUserId(id);
    }
	
	@Override
	public void addCart(Cart curCart) {		
		User tempUser = this.getUserById(curCart.getUser().getUserId());
		
		curCart.setUser(tempUser);
		curCart.setCartId(0);
		cartDao.save(curCart);
		
	}
	
	@Override
	public Cart getCartByUserId(int userId) {
		Cart tempCart = this.cartDao.findByUser_UserId(userId);
		tempCart.getUser().setPassword(null);
		return tempCart;
	}
	
	@Autowired
	public CartServiceImpl(CartDao cartDao, UserDao userDao) {
		this.cartDao = cartDao;
		this.userDao = userDao;
	}

	
}
