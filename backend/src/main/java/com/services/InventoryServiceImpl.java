package com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.InventoryDao;
import com.models.Inventory;

@Service
public class InventoryServiceImpl implements InventoryService {

	InventoryDao inventoryDao;
	
	@Override
	public Inventory updateInventory(Inventory inventory) {
		
		Inventory updatedInventory = inventoryDao.getById(inventory.getInventoryId());
		
		updatedInventory.setQuantity(inventory.getQuantity());
		
		return inventoryDao.save(updatedInventory);
	}
	
	@Autowired
	InventoryServiceImpl(InventoryDao inventoryDao) {
		this.inventoryDao = inventoryDao;
	}
}
