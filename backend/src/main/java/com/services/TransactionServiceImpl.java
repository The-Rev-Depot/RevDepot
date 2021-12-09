package com.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.TransactionDao;
import com.models.Transaction;

@Service
public class TransactionServiceImpl implements TransactionService {

	TransactionDao transDao;
	
	@Override
	public Transaction saveTransaction(Transaction transaction) {
		return transDao.save(transaction);
	}
	
	@Autowired
	TransactionServiceImpl(TransactionDao transDao) {
		this.transDao = transDao;
	}
}
