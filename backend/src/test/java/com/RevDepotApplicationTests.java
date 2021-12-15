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

	Product product = new Product(1, "rev pro shirt","shirt with revature logo", "https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg ",
			15, newFloat, "apparel", 1);
	INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES
	('T-Shirt - Grey', 'Grey T-shirt with the phrase "GIVE LIKE A BOSS" on front. Revature Logo on back. Various sizes.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoxnmro43rbVWEgIHsThMV1grQVuiH5wWTQ&usqp=CAU', 14.99, 4.3, 'Apparel', 0);
	
	
	//for some reason this test is not passing, the list of products being requested is out of order...
	@Test
	@DisplayName("Testing Product Repository")
	public void testProducts() {
		
		List<Product> products = (List<Product>)productDao.findAll();
		
		System.out.println(products.get(0));
		System.out.println(product);
		System.out.println(products);
				
		assertTrue(products.contains(product));
	}
	
	@Test
	@DisplayName("Testing Inventory Repository")
	public void testInventory() {
		Inventory inventory = new Inventory(4, product,300);
		
		List<Inventory> inventoryList = (List<Inventory>)inventoryDao.findAll();
		
		System.out.println(inventoryList.get(0));
		System.out.println(inventory);
				
		assertTrue(inventoryList.contains(inventory));
	}

}
