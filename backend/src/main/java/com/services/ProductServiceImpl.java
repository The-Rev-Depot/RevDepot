package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ProductDao;
import com.models.Product;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao pDao;
	
	@Override
	public List<Product> getAllDeals() {
		// TODO Auto-generated method stub
		return pDao.getAllDeals();
	}

}
