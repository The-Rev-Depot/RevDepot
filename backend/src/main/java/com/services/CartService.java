package com.services;

import com.models.Cart;
import com.models.User;

public interface CartService {
	
	public void update(Cart curCart);
	public User getUserById(int id);
	public void add(Cart curCart);
}
