package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.models.Inventory;
import com.services.InventoryServiceImpl;

@RestController
@RequestMapping(path = "inventory")
@CrossOrigin(origins = {"http://localhost:4200"}, methods = RequestMethod.GET)
public class InventoryController {

	private InventoryServiceImpl inventoryServiceImpl;
	
	
	@Autowired
	public InventoryController(InventoryServiceImpl inventoryServiceImpl) {
		this.inventoryServiceImpl = inventoryServiceImpl;
	}
	
	
	@GetMapping("/items")
	public ResponseEntity<List<Inventory>> getAllProducts() {
		return ResponseEntity.status(200).body(inventoryServiceImpl.getAllProducts());
	}

	
}
