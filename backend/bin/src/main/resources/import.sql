INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (1, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 23.99, 3.5, 'clothes', 15);
INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (2, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 23.99, 5, 'clothes', 15);
INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (3, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 19.99, 4, 'clothes', 15);
INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (4, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 15.99, 3.5, 'clothes', 15);
INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (5, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 14.99, 3, 'clothes', 15);
INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (6, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 20.99, 3.5, 'clothes', 15);
INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (7, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 19.99, 4, 'clothes', 15);
INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (8, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 18.99, 5, 'clothes', 15);
INSERT INTO product(product_id, product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES (9, 't-shirt', 'made of cotton', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 17.99, 3, 'clothes', 15);
INSERT INTO item(item_id, quantity, product_id) VALUES (1, 3, 1);
INSERT INTO inventory(inventory_id, product_id, quantity) VALUES (1, 1, 20);

INSERT INTO user (username, password, first_name, last_name, email, url_pro_pic, birthday) VALUES ('User1', '12345', 'user', 'lastname', 'email@email.com', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', '1990-12-24');

INSERT INTO user (username, password, first_name, last_name, email, url_pro_pic, birthday) VALUES ('User2', '123456', 'user2', 'lastname2', 'email2@email.com', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', '1990-11-02');

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES ('T-Shirt - Grey', 'Grey T-shirt with the phrase "GIVE LIKE A BOSS" on front. Revature Logo on back. Various sizes.', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 14.99, 4.3, 'Apparel', 0);

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES ('T-Shirt - Black', 'Black T-shirt with the phrase "CODE LIKE A BOSS" on front. Revature Logo on back. Various sizes.', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 12.99, 3.9, 'Apparel', 10);

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES ('Water Bottle', 'Plastic Water Bottle with Revature Logo. Various Colors.', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 3.99, 1.2, 'Office Supplies', 0);

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id) VALUES ('Notebook', 'Hard cover notebook. Black outside, orange inside.', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 8.99, 2.9, 'Office Supplies', 0);

INSERT INTO product (product_name, product_description, pic_url, product_price, product_rating, product_category, sale_id)VALUES ('Sticker', 'I love pie sticker', 'https://www.picclickimg.com/d/l400/pict/184892613206_/Code-Like-a-Boss-T-Shirt-Sz-S-Small.jpg', 0.99, 4.9, 'Misc.', 10);

INSERT INTO inventory (quantity, product_id) VALUES (20, 2);

INSERT INTO inventory (quantity, product_id) VALUES (30, 3);

INSERT INTO inventory (quantity, product_id) VALUES (50, 4);

INSERT INTO inventory (quantity, product_id) VALUES (10, 5);

INSERT INTO inventory (quantity, product_id) VALUES (99, 6);

INSERT INTO cart (user_id) VALUES (1);

INSERT INTO cart (user_id) VALUES (2);
