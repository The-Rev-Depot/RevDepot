package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.models.Cart;
import com.services.CartServiceImpl;

@RestController
@RequestMapping("/cart")
public class CartController {
	private CartServiceImpl cartService;

    @Autowired
    public CartController(CartServiceImpl cartService){
        this.cartService = cartService;
    }
    
    @PutMapping("/update")
    public void updateCart(@RequestBody Cart curCart){
        this.cartService.updateCart(curCart);
    }
    
    @PostMapping("/add")
    public void addCart(Cart curCart) {
    	this.cartService.addCart(curCart);
    }
    
    @GetMapping("/user/{id}")
    public Cart getCartByUserId(@PathVariable int id) {
    	return this.cartService.getCartByUserId(id);
    }

}
