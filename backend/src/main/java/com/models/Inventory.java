package com.models;

import java.sql.Date;

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
@Table(name = "inventory")
@ToString
public class Inventory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="inventory_id")
	private int inventoryId;
	@Column(name ="product_id")
	//if this is linked to the product table use @oneToOne annotation to link them in the DB
	// then use @JoinColumn to and give it the same name as above
	private int productId;
	private double quantity;
	
}
