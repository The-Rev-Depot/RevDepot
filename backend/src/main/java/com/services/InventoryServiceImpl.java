package com.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.dao.InventoryDao;
import com.dao.ProductDao;
import com.models.Inventory;
import com.models.Item;

@Service
public class InventoryServiceImpl implements InventoryService {

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

	public int getInventoryQuantity(int ProductId) {
		if (inventoryDao.existsById(ProductId)) {
			Inventory productQuantity = inventoryDao.getById(ProductId);
			return productQuantity.getQuantity();
		} else {
			System.out.println("Inventory is not found");
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
}
