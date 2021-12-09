package com.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.models.Item;
import com.services.ItemService;

@CrossOrigin
@RestController
public class ItemController {

	@Autowired
	ItemService is;

	@GetMapping(value = "/items/{id}")
	public Item getItem(@PathVariable("id") int id) {
		return is.getItem(id);
	}

	@PutMapping(value = "/items/{id}", consumes = "application/json", produces = "application/json")
	public Item updateItem(@PathVariable int id, @RequestBody Item newItem) {
		newItem.setId(id);
		return is.updateItem(newItem);
	}
}
