package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.models.Product;

@Repository
public interface ProductDao extends JpaRepository<Product,Integer>{
	
		
	public List<Product> findAll();

	@Query(value = "Select * from revdepot.product where product.sale_id = 10", nativeQuery=true)
	List<Product> getAllDeals();
	
	@Query(value = "Select * from revdepot.product where product_category = 'category'", nativeQuery = true)
	List<Product> getAllDealsByCategory();
	
//	@Query(value = "Select * from revdepot.product where product.sale != 0", nativeQuery=true)
//	 getDealById(@Param("id")int id);
	
	public Product findByProductId(int productId);
}
