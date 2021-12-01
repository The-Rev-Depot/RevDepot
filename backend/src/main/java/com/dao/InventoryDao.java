package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Inventory;

public interface InventoryDao extends JpaRepository<Inventory, Integer>{

}
