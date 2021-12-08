package com;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dao.ProductDao;
import com.models.Product;



@SpringBootTest
class RevDepotApplicationTests {
	
	float newFloat = (float) 4.5;

	@Autowired
	private ProductDao productDao;
	
	
	public boolean results;
	
	@Test
	@DisplayName("Testing Repository")
	public void testSave() {
		Product product = new Product(1, "rev pro","shirt with Revature logo", "www.google.com",
				15, newFloat, "clothing", 0);
		
		List<Product> products = (List<Product>)productDao.findAll();
		
		System.out.println(products.get(0));
		System.out.println(product);
				
		assertEquals(product, products.get(0));
	}

}
