package com.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.models.Item;

@Repository
public interface ItemDao extends CrudRepository<Item, Integer> {

	public boolean existsById(int ItemId);

}
