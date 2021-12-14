package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.models.Inventory;
import com.models.Product;

@Repository
public interface InventoryDao extends JpaRepository<Inventory, Integer>{

	public Inventory findByProduct(Product product);
	public List<Inventory> findAll();

//	public List<Inventory> findByCategory(String category);
	
}


