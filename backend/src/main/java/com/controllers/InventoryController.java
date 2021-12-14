package com.controllers;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.models.Inventory;
import com.models.Item;
import com.services.InventoryService;

@RestController
@RequestMapping(path = "inventory")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class InventoryController {

	private InventoryService inventoryService;

	@Autowired
	public InventoryController(InventoryService inventoryService) {
		this.inventoryService = inventoryService;
	}

	public InventoryController() {
	}

	/**
	 * Updates the inventory's quantity.
	 * 
	 * @param inventory The inventory to be updated
	 * @return The updated inventory
	 */
	@PostMapping(value="update")
	public Item[] updateInventory (@RequestBody Item items[]) {
		
		// Check that we have enough inventory to process request
		boolean hasInventory = true;
		for (Item item: items) {
			Inventory inventory = inventoryService.getInventoryByProduct(item.getProduct());
			if (!(inventory != null && (inventory.getQuantity() - item.getQuantity()) >= 0)) {
				hasInventory = false;
				break;
			}
		}
		
		// Respond with error if we're lacking inventory 
		if (!hasInventory) {
			throw new ResponseStatusException(HttpStatus.CONFLICT);
		}
		
		// Subtract items from inventory
		for (Item item : items) {
			inventoryService.subtractItemFromInventory(item);
		}

		return items;
	}
	
	/**
	 * Grab all items from the inventory table to put into an array to send to the frontend.
	 * 				This is called by the getIProduct() in the frontend apart of the product-service
	 * @param 			http://localhost:XXXX/inventory/items 
	 * @return 			The entire inventory table in an array
	 */
	@GetMapping("/items")
	public ResponseEntity<List<Inventory>> getAllProducts() {
		return ResponseEntity.status(200).body(inventoryService.getAllProducts());
	}
	
	@PostMapping(value="getMax")
	public Object[] checkMaxInventory (@RequestBody Item items[]) {
		List<Item> itemList = new LinkedList<Item>(Arrays.asList(items));
		ListIterator<Item> iterator = itemList.listIterator();
		
		while (iterator.hasNext()) {
			Item item = iterator.next();
			Inventory inventory = inventoryService.getInventoryByProduct(item.getProduct());
			if (inventory != null) {
				item.setQuantity(inventory.getQuantity());
			} else {
				itemList.remove(item);
			}		
		}

		
		
		return  itemList.toArray();
	}
}

	@GetMapping(value = "/quantity/{productId}")
	public int getInventoryQuantity(@PathVariable("productId") int id) {
		return inventoryService.getInventoryQuantity(id);
	}
}
