package com.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "items")
@ToString
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "item_id")
	private int id;
	private int quanity;
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "product_id", nullable = false)
	private Product product;

	public Item(int id, int quanity, Product product) {
		super();
		this.id = id;
		this.quanity = quanity;
		this.product = product;
	}

	public Item(int quanity, Product product) {
		super();
		this.quanity = quanity;
		this.product = product;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQuanity() {
		return quanity;
	}

	public void setQuanity(int quanity) {
		this.quanity = quanity;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", quanity=" + quanity + ", product=" + product + "]";
	}

}
