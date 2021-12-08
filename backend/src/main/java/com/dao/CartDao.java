package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Cart;

public interface CartDao extends JpaRepository<Cart, Integer> {
	public Cart findByCartId(int id);
	public Cart findByUser_UserId(int id);
}
