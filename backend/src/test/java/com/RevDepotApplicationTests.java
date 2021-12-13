package com;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dao.InventoryDao;
import com.dao.ProductDao;
import com.models.Inventory;
import com.models.Product;



@SpringBootTest
class RevDepotApplicationTests {
	
	float newFloat = (float) 4.5;

	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private InventoryDao inventoryDao;

	Product product = new Product(4, "rev pro shirt","shirt with revature logo", "www.google.com",
			15, newFloat, "apparel", 0);
	
	//for some reason this test is not passing, the list of products being requested is out of order...
	@Test
	@DisplayName("Testing Product Repository")
	public void testProducts() {
		
		List<Product> products = (List<Product>)productDao.findAll();
		
		//System.out.println(products.get(3));
		//System.out.println(product);
		System.out.println(products.get(0));
				
		assertTrue(products.contains(product));
		//assertEquals(product, products.get(3));
	}
	
	@Test
	@DisplayName("Testing Inventory Repository")
	public void testInventory() {
		Inventory inventory = new Inventory(4, product,300);
		
		List<Inventory> inventoryList = (List<Inventory>)inventoryDao.findAll();
		
		//System.out.println(inventoryList.get(3));
		System.out.println(inventoryList);
		
		assertTrue(inventoryList.contains(inventory));
		//assertEquals(inventory, inventoryList.get(3));
	}

}
