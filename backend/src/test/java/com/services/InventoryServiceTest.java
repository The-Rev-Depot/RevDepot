package com.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import com.dao.InventoryDao;
import com.models.Inventory;
import com.models.Item;
import com.models.Product;

@SpringBootTest
public class InventoryServiceTest {

	InventoryService inventoryService;
	
	@Mock
	InventoryDao inventoryDao;
	
	@BeforeEach
	void setUp() {
		inventoryService = Mockito.spy(new InventoryServiceImpl(inventoryDao));
	}
	
	@Test
	void updateInventoryTest() {
		// Arrange
		Inventory expectedInventory = new Inventory();
		int expectedQuantity = 5;
		expectedInventory.setQuantity(expectedQuantity);
		
		when(inventoryDao.getById(expectedInventory.getInventoryId())).thenReturn(expectedInventory);
		
		when(inventoryDao.save(expectedInventory)).thenReturn(expectedInventory);
		
		// Act
		Inventory actualInventory = inventoryService.updateInventory(expectedInventory);
		
		// Assert
		verify(inventoryDao, times(1)).getById(expectedInventory.getInventoryId());
		verify(inventoryDao, times(1)).save(expectedInventory);
		assertEquals(expectedQuantity, actualInventory.getQuantity());
		assertEquals(expectedInventory, actualInventory);
		
	}
	
	@Test
	void subtractItemFromInventoryTest() {
		// Arrange
		Product expectedProduct = new Product();
		
		Inventory expectedInventory = new Inventory();
		int expectedInventoryQuantity = 10;
		expectedInventory.setProduct(expectedProduct);
		expectedInventory.setQuantity(expectedInventoryQuantity);
		
		Item expectedItem = new Item();
		int expectedItemQuantity = 1;
		expectedItem.setProduct(expectedProduct);
		expectedItem.setQuantity(expectedItemQuantity);
		
		when(inventoryDao.findByProduct(expectedItem.getProduct())).thenReturn(expectedInventory);
		doReturn(expectedInventory).when(inventoryService).updateInventory(expectedInventory);
		
		// Act
		Inventory actualInventory = inventoryService.subtractItemFromInventory(expectedItem);
		
		// Assert
		verify(inventoryDao, times(1)).findByProduct(expectedProduct);
		verify(inventoryService, times(1)).updateInventory(expectedInventory);
		assertEquals(expectedInventoryQuantity - expectedItemQuantity, actualInventory.getQuantity());
		assertEquals(expectedInventory.getInventoryId(), actualInventory.getInventoryId());
	}
	
}
