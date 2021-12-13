package com.services;

import java.util.List;

import com.models.Product;

public interface ProductService {

	public List<Product> getAllDeals();

	public List<Product> getAllDealsByCategory();

	List<Product> getAllProducts();
}
