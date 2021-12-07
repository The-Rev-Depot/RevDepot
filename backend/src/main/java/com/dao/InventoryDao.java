package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Inventory;
import com.models.Product;

public interface InventoryDao extends JpaRepository<Inventory, Integer>{

	public List<Inventory> findAll();

//	public List<Inventory> findByCategory(String category);
	
}


