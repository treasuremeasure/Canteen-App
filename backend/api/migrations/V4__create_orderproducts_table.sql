CREATE TABLE orderproducts (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),

    -- Внешние ключи
    CONSTRAINT fk_order
        FOREIGN KEY(order_id) REFERENCES orders(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_product
        FOREIGN KEY(product_id) REFERENCES products(id)
        ON DELETE CASCADE
);
