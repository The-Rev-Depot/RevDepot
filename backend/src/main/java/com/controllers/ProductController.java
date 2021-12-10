package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.models.Product;
import com.services.ProductService;

@RestController
@RequestMapping(path = "product")
public class ProductController {
	
	private ProductService pService;

	@CrossOrigin(origins = "4200")
	@GetMapping(path = "/deals", produces = "application/json")
	public ResponseEntity<List<Product>> getAllDeals() {
		return new ResponseEntity<List<Product>>(pService.getAllDeals(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "4200")
	@GetMapping(path = "/deals/{category}", produces = "application/json")
	public ResponseEntity<List<Product>> getAllDealsByCategory(@PathVariable("category") String category) {
		return new ResponseEntity<List<Product>>(pService.getAllDealsByCategory(category), HttpStatus.OK);
	}
	
	@GetMapping("/view")
	public ResponseEntity<List<Product>> getAllProducts() {
		return ResponseEntity.status(200).body(pService.getAllProducts());
	}

	@Autowired
	ProductController(ProductService pService) {
		this.pService = pService;
	}
//	
//	@CrossOrigin(origins = "4200")
//	@GetMapping(path = "/deals", produces = "apllication/json")
//	public ResponseEntity<Product> getDealByID(int id) {
//		
//	}
	
}
