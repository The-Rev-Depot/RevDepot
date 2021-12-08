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

	Product product = new Product(1, "rev pro","shirt with Revature logo", "www.google.com",
			15, newFloat, "apparel", 0);
	
	@Test
	@DisplayName("Testing Repository")
	public void testProducts() {
//		Product item2 = new Product(1, "rev pro","shirt with Revature logo", "www.google.com",
//				15, newFloat, "clothing", 0);
		
		List<Product> products = (List<Product>)productDao.findAll();
		
		System.out.println(products.get(0));
		System.out.println(product);
		System.out.println(products);
				
		assertEquals(product, products.get(0));
	}
	
	@Test
	@DisplayName("Testing Inventory Repository")
	public void testInventory() {
		Inventory inventory = new Inventory(1, product,1);
		
		List<Inventory> inventoryList = (List<Inventory>)inventoryDao.findAll();
		
		System.out.println(inventoryList.get(0));
		System.out.println(inventory);
				
		assertEquals(inventory, inventoryList.get(0));
	}

}
