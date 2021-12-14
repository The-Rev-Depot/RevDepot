package com.services;

import java.util.List;
import java.util.Optional;

import org.hibernate.TransientObjectException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.InventoryDao;
import com.dao.ProductDao;
import com.models.Inventory;
import com.models.Item;
import com.models.Product;

@Service
public class InventoryServiceImpl implements InventoryService {

	@Autowired
	InventoryDao inventoryDao;
	
	@Autowired
	ProductDao prodDao;
	
	@Override
	public Inventory updateInventory(Inventory inventory) {
		Inventory updatedInventory = inventoryDao.getById(inventory.getInventoryId());
		
		updatedInventory.setQuantity(inventory.getQuantity());
		
		return inventoryDao.save(updatedInventory);
	}
	
	@Override
	public Inventory subtractItemFromInventory(Item item) {
		// Get inventory object
		Inventory inventory = inventoryDao.findByProduct(item.getProduct());
	
		// Subtract item's quantity from inventory's quantity
		inventory.setQuantity(inventory.getQuantity() - item.getQuantity());
		
		// Update inventory in database
		return updateInventory(inventory);
		
	}
	
	@Override
	public Inventory getInventoryByProduct(Product product) {
		
		Optional<Product> persistedProduct = prodDao.findById(product.getProductId());
		
		if (persistedProduct.isPresent()) {
			return inventoryDao.findByProduct(product);
		} else {
			System.out.println("That product may not exist in the database");
			return null;
		}

	}
	
	@Override
	public List<Inventory> getAllProducts() {
		return inventoryDao.findAll();
	}
	
	@Autowired
	InventoryServiceImpl(InventoryDao inventoryDao) {
		this.inventoryDao = inventoryDao;
	}
}
