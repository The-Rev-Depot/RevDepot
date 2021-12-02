package com.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.models.Product;


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
		restURL = new URL(baseURL + ":" + port + "/product/deals");
	}
	
	protected String mapToJson(Object obj) throws JsonProcessingException {
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper.writeValueAsString(obj);
	}

	protected <T> T mapFromJson(String json, Class<T> clazz)
			throws JsonParseException, JsonMappingException, IOException {

		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper.readValue(json, clazz);
	}
	
	@Test
	void testSalesMath() throws Exception {
		//get product from db		
		MvcResult mvcResult = mvc
				.perform(MockMvcRequestBuilders.get(restURL.toString()).accept(MediaType.APPLICATION_JSON)).andReturn();
		
		// do math with sales number
		
		String productResp = mvcResult.getResponse().getContentAsString();
		Product[] products = mapFromJson(productResp, Product[].class);
		
		//assert that new price is correct new price/lower than original
		assertNotEquals(products.length, 0);
	}
}
