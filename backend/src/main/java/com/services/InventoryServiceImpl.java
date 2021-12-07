package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.InventoryDao;
import com.dao.ProductDao;
import com.models.Inventory;
import com.models.Product;

@Service
public class InventoryServiceImpl implements InventoryService {

private InventoryDao inventoryDao;
	
	@Autowired
	public InventoryServiceImpl(InventoryDao inventoryDao) {
		this.inventoryDao = inventoryDao;
	}
	
	public List<Inventory> getAllProducts() {
		return inventoryDao.findAll();
	}
	
//		
//	//methods to select by category 	
//		//clothing, stationary, accessories...all(above)?
//	public List<Inventory> getProductByCategory(Product product) {
//		
//		List<Inventory> productCategory = null;
//		
//		productCategory = inventoryDao.findByCategory(product.getCategory());
//		
//		
//		return null;
//	}

	
	
}
