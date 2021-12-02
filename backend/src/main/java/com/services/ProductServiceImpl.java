package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ProductDao;
import com.models.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
	private ProductDao productDao;
	
	@Autowired
	public ProductServiceImpl(ProductDao productDao) {
		this.productDao = productDao;
	}
	
	public List<Product> getAllProducts() {
		return productDao.findAll();
	}

}
