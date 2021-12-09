package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Product;

public interface ProductDao extends JpaRepository<Product,Integer>{
	
	public List<Product> findAll();

}
