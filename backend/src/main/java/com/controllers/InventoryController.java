package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.models.Inventory;
import com.services.InventoryService;

@RestController
@RequestMapping(path = "inventory")
public class InventoryController {

	private InventoryService inventoryService;
	
	@Autowired
	public InventoryController (InventoryService inventoryService){
		this.inventoryService = inventoryService;
	}
	
	public InventoryController() { }
	
	/**
	 * Updates the inventory's quantity.
	 * @param inventory The inventory to be updated
	 * @return 			The updated inventory
	 */
	@PostMapping(value="update")
	public Inventory updateInventory (@RequestBody Inventory inventory) {
		return inventoryService.updateInventory(inventory);
	}
}

