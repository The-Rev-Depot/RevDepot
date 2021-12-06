package com.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import com.models.Cart;
import com.models.Item;
import com.models.Product;
import com.models.User;

class TestCartService {
	
	/*
	 * Mock Cart
	 */
	private Cart testCart = new Cart();
	
	
	/*
	 * Mock Users
	 */
	private User user1 = new User(100, "fakeusername", "password", "John", "Smith", "email@email.com", null, null);
	private User user2 = new User(100, "fakeusername2", "password2", "Jane", "Doe", "email@email.com", null, null);

	
	/*
	 * Mock Products
	 */
	private Product product1 = new Product(1, "fakeProduct", "fakeDescription", null, 33, (float) 3.5, "fakeCategory", 0);
	private Product product2 = new Product(1, "fakeProduct2", "fakeDescription2", null, 199, (float) 4.5, "fakeCategory2", 0);

	
	/*
	 * 	Mock Items
	 */
	private Item item1 = new Item(1234, 2, product1);
	private Item item2 = new Item(123435, 1, product2);
	
	
	/*
	 *Creating a temporary cart object, assigning value, and testing assertions. 
	 */
	@Test
	void shouldUpdateTemporaryCartWithCartPassed() {
		
		Set<Item> itemsList = new HashSet<Item>();
		
		itemsList.add(item1);
		itemsList.add(item2);
		
		testCart.setUser(user1);
		testCart.setItems(itemsList);
		
		Cart cartTemp = testCart;
		
		
		assertEquals(cartTemp.getItems(), testCart.getItems());
		assertEquals(cartTemp.getUser(), testCart.getUser());
		assertEquals(cartTemp.getCartId(), testCart.getCartId());
	

	}
	
	
	
	/*
	 *Creating a temporary cart objects, NOT assigning any value to it, and testing for false assertions. 
	 */
	@Test
	void shouldNotUpdateTemporaryCartWithCartPassed() {
		
		Cart cartTemp =  new Cart();
		
		Set<Item> itemsList = new HashSet<Item>();
		
		itemsList.add(item1);
		itemsList.add(item2);
		
		testCart.setUser(user1);
		testCart.setItems(itemsList);
	
		assertNotEquals(cartTemp.getItems(), testCart.getItems());
		assertNotEquals(cartTemp.getUser(), testCart.getUser());


	}

}
