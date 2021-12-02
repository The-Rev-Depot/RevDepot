package com.controllers;

import java.net.MalformedURLException;
import java.net.URL;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;


@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class SalesTest {
	
	protected MockMvc mvc;

	@LocalServerPort
	private String port;

	private String baseURL = "http://localhost";

	URL restURL;
	
	@Autowired
	WebApplicationContext webApplicationContext;

	protected void setItUp() throws MalformedURLException {
		mvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}

	@BeforeEach
	public void setUp() throws MalformedURLException {
		setItUp();
		restURL = new URL(baseURL + ":" + port + "/product/0");
	}
	
	@Test
	void testSalesMath() throws Exception {
		//get product from db
		
		MvcResult mvcResult = mvc
				.perform(MockMvcRequestBuilders.get(restURL.toString()).accept(MediaType.APPLICATION_JSON)).andReturn();
		// do math with sales number
		
		String salePerc = mvcResult.getResponse().getContentAsString();
		int salePercent = Integer.valueOf(salePerc);
		//assert that new price is correct new price/lower than original
	}
}
