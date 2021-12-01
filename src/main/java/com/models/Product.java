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
@Table(name = "product")
@ToString
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="product_id")
	private int productId;
	@Column(name ="product_name")
	private String productName;
	private String description;
	@Column(name ="pic_url")
	private String picUrl;
	@Column(name ="product_price")
	private int productPrice;
	@Column(name ="product_rating")
	private float productRating;
	private String category;
	@Column(name ="sale_id")
	private int isOnSale;

}
