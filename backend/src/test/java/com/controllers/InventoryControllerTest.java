package com.controllers;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.models.Inventory;
import com.models.Item;
import com.services.InventoryService;

@SpringBootTest
public class InventoryControllerTest {
	
	InventoryController inventoryController;

	@Mock
	InventoryService inventoryService;
	
	@BeforeEach
	void setUp() {
		inventoryController = new InventoryController(inventoryService);
	}
	
	
	@Test
	void updateInventoryTest() {
		// Arrange
		Inventory expectedInventory = new Inventory();
		Item expectedItems[] = { new Item(), new Item(), new Item()};
		
		// Act
		Item actualItems[] = inventoryController.updateInventory(expectedItems);
		
		// Assert
		verify(inventoryService, times(expectedItems.length)).subtractItemFromInventory(any(Item.class));
		assertArrayEquals(expectedItems, actualItems);
	}
	
}
