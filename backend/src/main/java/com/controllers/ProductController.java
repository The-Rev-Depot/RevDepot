package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.models.Product;
import com.services.ProductServiceImpl;

@RestController
@RequestMapping(path = "inventory")
public class ProductController {
	
	private ProductServiceImpl productServiceImpl;
	
	
	@Autowired
	public ProductController(ProductServiceImpl productServiceImpl) {
		this.productServiceImpl = productServiceImpl;
	}
	
	
	@GetMapping("/view")
	public ResponseEntity<List<Product>> getAllProducts() {
		return ResponseEntity.status(200).body(productServiceImpl.getAllProducts());
	}

}
