package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.InventoryDao;
import com.dao.ProductDao;
import com.models.Inventory;
import com.models.Item;

@Service
public class InventoryServiceImpl implements InventoryService {

	InventoryDao inventoryDao;
	//JpaRepository methods
	
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
	
		// Subtract item.quantity from inventory's quantity
		inventory.setQuantity(inventory.getQuantity() - item.getQuantity());
		
		// Update inventory in database
		return updateInventory(inventory);
		
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
