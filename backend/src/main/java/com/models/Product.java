package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")
@ToString
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private int productId;
	@Column(name = "product_name")
	private String productName;
	@Column(name = "product_description")
	private String description;
	@Column(name = "pic_url")
	private String picUrl;
	@Column(name = "product_price")
	private int productPrice;
	@Column(name = "product_rating")
	private float productRating;
	@Column(name = "product_category")
	private String category;
	@Column(name = "sale_id")
	private int isOnSale;
	
	public Product(String productName, String description, String picUrl, int productPrice,
			float productRating, String category, int isOnSale) {
		super();
		this.productName = productName;
		this.description = description;
		this.picUrl = picUrl;
		this.productPrice = productPrice;
		this.productRating = productRating;
		this.category = category;
		this.isOnSale = isOnSale;
	}

	
	
}
