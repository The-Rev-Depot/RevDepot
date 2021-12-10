package com.services;

import java.util.List;

import com.models.Product;

public interface ProductService {
	
	public List<Product> getAllDeals();
	
	public List<Product> getAllDealsByCategory(String category);

	List<Product> getAllProducts();
}
