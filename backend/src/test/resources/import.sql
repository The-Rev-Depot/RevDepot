--------------------------------------------------------------------------------------------------------------------
--REVDEPOT SQL SCRIPT
--Script file to initialize h2 database tables fro RevDepot ECommerce application
--------------------------------------------------------------------------------------------------------------------

----------------------------
--USER TABLE
----------------------------
--table name = user
--user_id (PK and generated value)
--username (string)
--password (encrypted string)
--first_name (string)
--last_name (string)
--email (string)
--url_pro_pic (string)
--birthday (date mm-dd-yyyy)

INSERT INTO user (user_id, username, password, first_name, last_name, email, url_pro_pic, birthday)
VALUES (DEFAULT, 'User1', '12345', 'user', 'lastname', 'email@email.com', 'https://i.pinimg.com/originals/f4/cd/b0/f4cdb0f288f3f46186a2366cb3fb9b31.jpg', '1990-12-24');

INSERT INTO user (user_id, username, password, first_name, last_name, email, url_pro_pic, birthday)
VALUES (DEFAULT, 'User2', '123456', 'user2', 'lastname2', 'email2@email.com', 'https://thehill.com/sites/default/files/ca_stevecarell_052920getty.jpg', '1990-11-02');

----------------------------
--TRANSACTION TABLE
----------------------------
--table name = transaction
--transaction_id (PK and generated value)
--transaction_date (date)
--transaction_cost (double)
--user_id (Many to One Join Column)
--itemId (Set<Item>)



----------------------------
--PRODUCT TABLE
----------------------------
--table name = product
--product_id (PK and generated value)
--product_name (string)
--product_description (string)
--pic_url (string)
--product_price (double)
--product_rating (float)
--product_category (string)
--sale_id (int)

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id)
VALUES ('T-Shirt - Grey', 'Grey T-shirt with the phrase "GIVE LIKE A BOSS" on front. Revature Logo on back. Various sizes.'
, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoxnmro43rbVWEgIHsThMV1grQVuiH5wWTQ&usqp=CAU'
, 14.99, 4.3, 'Apparel', 0);

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id)
VALUES ('T-Shirt - Black', 'Black T-shirt with the phrase "CODE LIKE A BOSS" on front. Revature Logo on back. Various sizes.'
, 'https://i.ebayimg.com/thumbs/images/g/yzMAAOSwaHZgy1VV/s-l300.jpg'
, 12.99, 3.9, 'Apparel', 10);

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id)
VALUES ('Water Bottle', 'Plastic Water Bottle with Revature Logo. Various Colors.'
, 'https://cdn.asicentral.com/esp-websites/340963/custom-solutions/atlantic-aviation.png'
, 3.99, 1.2, 'Office Supplies', 0);

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id)
VALUES ('Notebook', 'Hard cover notebook. Black outside, orange inside.'
, 'https://commonmedia.asicentral.com/5560000/5563465/revature_set.png'
, 8.99, 2.9, 'Office Supplies', 0);

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id)
VALUES ('Sticker', 'I love pie sticker'
, 'https://backendbase.com/i/p/i-love-pie-30ded-1.png'
, 0.99, 4.9, 'Misc.', 10);


----------------------------
--ITEM TABLE (Transient Table)
----------------------------
--table name = item
--item_id (PK and generated value int)
--quantity (int)
--product_id (FK Many to One)

--Is not initialized since it is transient

----------------------------
--INVENTORY TABLE
----------------------------
--table name = inventory
--inventory_id (PK and generated value int)
--product_id (FK One to One)
--quantity (int)

NSERT INTO inventory (quantity, product_id)
VALUES (20, 1);

INSERT INTO inventory (quantity, product_id)
VALUES (30, 2);

INSERT INTO inventory (quantity, product_id)
VALUES (50, 3);

INSERT INTO inventory (quantity, product_id)
VALUES (10, 4);

INSERT INTO inventory (quantity, product_id)
VALUES (99, 5);

----------------------------
--CART TABLE
----------------------------
--table name = cart
--cart_id (PK and generated value int)
--user_id (FK One to One)
--itemId (Set<Item>)

INSERT INTO cart (user_id)
VALUES (1);

INSERT INTO cart (user_id)
VALUES (2);


