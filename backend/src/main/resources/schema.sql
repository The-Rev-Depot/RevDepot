
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS transactions;

CREATE TABLE users (
    user_id          IDENTITY,
    username    varchar(255) UNIQUE,
    password    varchar(255),
    first_name   varchar(255),
    last_name  varchar(255),
    email     varchar(255),
    url_pro_pic   varchar(255),
    birthday    date,
    PRIMARY KEY (user_id)
);

CREATE TABLE cart (
    cart_id     IDENTITY,
    user_id  	int,
    itemId      int,
    PRIMARY KEY (cart_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
);

CREATE TABLE products (
    product_id     integer,
    product_name   varchar(255),
    product_description		varchar(255),
    pic_url    varchar(255),
    product_price  int,
    product_rating int,
    product_category  varchar(255),
    sale_id  int,
    PRIMARY KEY (product_id)
);

CREATE TABLE inventory (
    inventory_id    IDENTITY,
    product_id  	int,
    quantity    	int,
    PRIMARY KEY (inventory_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE 
);

CREATE TABLE items (
    item_id     integer,
    quanity     integer,
    product_id  bigint,
    PRIMARY KEY (item_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

CREATE TABLE transactions (
    transaction_id     int,
    transaction_date   date,
    transaction_cost	int,
    user_id    int,
    item_id    int,
    PRIMARY KEY (user_id, item_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES items(item_id) ON DELETE CASCADE
);