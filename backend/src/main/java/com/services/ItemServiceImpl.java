package com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.dao.ItemDao;
import com.models.Item;

@Service
public class ItemServiceImpl implements ItemService {

	@Autowired
	ItemDao iD;

	@Override
	public Item getItem(int id) {
		if (iD.existsById(id)) {
			return iD.findById(id).get();
		} else {
			System.out.println("Item id is not found");
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}

	@Override
	public Item updateItem(Item newItem) {
		if (iD.existsById(newItem.getId())) {
			Item I = iD.findById(newItem.getId()).get();
			I.setQuanity(newItem.getQuanity());
			return iD.save(I);
		} else {
			System.out.println("Item id is invalid for update");
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
	}

}
