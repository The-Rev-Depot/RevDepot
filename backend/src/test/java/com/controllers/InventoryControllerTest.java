package com.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.models.Inventory;
import com.services.InventoryService;
import com.services.InventoryServiceImpl;

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
		
		// Act
		//Inventory actualInventory = inventoryController.updateInventory(expectedInventory);
		
		// Assert
		verify(inventoryService, times(1)).updateInventory(expectedInventory);
	}
	
}
