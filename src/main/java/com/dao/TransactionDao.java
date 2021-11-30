package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Transaction;

public interface TransactionDao extends JpaRepository<Transaction,Integer>{

}
