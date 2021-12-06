package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.models.Item;
import com.services.InventoryService;

@RestController
@RequestMapping(path = "inventory")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
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
	public Item[] updateInventory (@RequestBody Item items[]) {
		
		for (Item item : items) {
			inventoryService.subtractItemFromInventory(item);
		}
		
		return items;
//		return inventoryService.updateInventory(inventory);
	}
}

