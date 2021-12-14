package com.services;

import java.util.List;

import com.models.Inventory;
import com.models.Item;
import com.models.Product;

public interface InventoryService {

	/**
	 * Updates the quantity of the inventory object.
	 * 
	 * @param inventory The inventory to be updated
	 * @return The updated inventory
	 */
	Inventory updateInventory(Inventory inventory);

	/**
	 * Subtracts the given item's quantity from the corresponding inventory record's
	 * quantity.
	 * 
	 * @param item The item
	 * @return The updated inventory object
	 */
	public Inventory subtractItemFromInventory(Item item);
	
	/**
	 * Returns the inventory for a given product.
	 */
	public Inventory getInventoryByProduct(Product product);

	/**
	 * Returns all inventory objects in database.
	 */
	List<Inventory> getAllProducts();

	public int getInventoryQuantity(int productId);

}
