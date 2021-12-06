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
@Table(name = "item")
@ToString
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="item_id")
	private int itemId;
	private int quantity;
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name="product_id", nullable = false)
	private Product product;
	
	
}
