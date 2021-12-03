package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
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
    public void update(@RequestBody Cart curCart){
        this.cartService.update(curCart);
    }
    
    @PostMapping("/add")
    public void add(Cart curCart) {
    	this.cartService.add(curCart);
    }

}
