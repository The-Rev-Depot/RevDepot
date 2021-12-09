package com.models;

import javax.persistence.*;

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
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name="product_id", nullable = false)
	private Product product;
	private int quantity;
	
}
