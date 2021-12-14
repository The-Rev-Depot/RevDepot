package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.models.Product;


public interface ProductDao extends JpaRepository<Product,Integer>{
	
	public List<Product> findAll();

	@Query(value = "Select * from product where product.sale_id > 0", nativeQuery=true)
	List<Product> getAllDeals();
	
	@Query(value = "Select * from product where product_category = ?1", nativeQuery = true)
	List<Product> getAllDealsByCategory(String category);
	
//	@Query(value = "Select * from revdepot.product where product.sale != 0", nativeQuery=true)
//	 getDealById(@Param("id")int id);
}
