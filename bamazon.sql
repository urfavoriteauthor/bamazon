CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
id INTEGER AUTO_INCREMENT NOT NULL,
item_id VARCHAR(30)NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(10) NOT NULL,
stock_quantity INTEGER(20) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("dvd1", "DVD Player", "Electronics", 20 , 10);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES ("cd1", "CD Player", "Electronics", 20 , 5);