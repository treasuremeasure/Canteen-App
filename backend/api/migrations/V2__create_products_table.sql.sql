CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    itemname VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    pr_quantity INTEGER NOT NULL,
    url VARCHAR(255),
    category VARCHAR(100)
);
