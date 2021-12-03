package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.dao.ProductDao;
import com.models.Product;

public interface ProductService {
	
	public List<Product> getAllDeals();
	
	public List<Product> getAllDealsByCategory();
}
