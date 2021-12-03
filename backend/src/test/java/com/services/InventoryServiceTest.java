package com.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.dao.InventoryDao;
import com.models.Inventory;

@SpringBootTest
public class InventoryServiceTest {

	InventoryService inventoryService;
	
	@Mock
	InventoryDao inventoryDao;
	
	@BeforeEach
	void setUp() {
		inventoryService = new InventoryServiceImpl(inventoryDao);
	}
	
	@Test
	void updateInventoryTest() {
		// Arrange
		Inventory expectedInventory = new Inventory();
		
		when(inventoryDao.findById(expectedInventory.getInventoryId()))
		.thenReturn(Optional.of(expectedInventory));
		
		when(inventoryDao.save(expectedInventory)).thenReturn(expectedInventory);
		
		// Act
		Inventory actualInventory = inventoryService.updateInventory(expectedInventory);
		
		// Assert
		verify(inventoryDao, times(1)).findById(expectedInventory.getInventoryId());
		verify(inventoryDao, times(1)).save(expectedInventory);
		assertEquals(actualInventory, expectedInventory);
		
	}
}
