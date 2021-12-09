package com.services;

import com.models.Item;

public interface ItemService {

	public Item getItem(int id);

	public Item updateItem(Item newItem);

}
