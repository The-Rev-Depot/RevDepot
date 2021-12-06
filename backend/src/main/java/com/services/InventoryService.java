package com.services;

import com.models.Inventory;

public interface InventoryService {
	
	/**
	 * Updates the quantity of the inventory object.
	 * @param inventory The inventory to be updated
	 * @return 			The updated inventory
	 */
	Inventory updateInventory(Inventory inventory);

}
