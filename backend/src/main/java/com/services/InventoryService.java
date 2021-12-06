package com.services;

import com.models.Inventory;
import com.models.Item;

public interface InventoryService {
	
	/**
	 * Updates the quantity of the inventory object.
	 * @param inventory The inventory to be updated
	 * @return 			The updated inventory
	 */
	Inventory updateInventory(Inventory inventory);

	/**
	 * Subtracts the given item's quantity from the corresponding inventory record's quantity.
	 * @param item  The item
	 * @return		The updated inventory object
	 */
	public Inventory subtractItemFromInventory(Item item);
	
}
