package com.services;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.dao.TransactionDao;
import com.models.Transaction;

@SpringBootTest
public class TransactionServiceTest {
	
	TransactionService transactionService;
	
	@Mock
	TransactionDao transactionDao;
	
	@BeforeEach
	void setUp() {
		transactionService = new TransactionServiceImpl(transactionDao);
	}
	
	@Test
	void SaveTransactionTest() {
		// Arrange
		Transaction expectedTransaction = new Transaction();
		when(transactionDao.save(expectedTransaction)).thenReturn(expectedTransaction);
		
		// Act
		Transaction actualTransaction = transactionService.saveTransaction(expectedTransaction);
		
		// Assert
		verify(transactionDao, times(1)).save(expectedTransaction);
		assertEquals(actualTransaction, expectedTransaction);
	}
}
