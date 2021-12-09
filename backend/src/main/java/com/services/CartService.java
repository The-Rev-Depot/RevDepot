package com.services;

import com.models.Cart;
import com.models.User;

public interface CartService {
	
	public void updateCart(Cart curCart);
	public User getUserById(int id);
	public void addCart(Cart curCart);
	public Cart getCartByUserId(int userId);
}
