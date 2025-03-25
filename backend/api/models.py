from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    itemname = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    pr_quantity = Column(Integer, nullable=False)
    url = Column(String, nullable=True)
    category = Column(String, nullable=True)

    def __repr__(self):
        return f"<Product(id={self.id}, itemName={self.itemName}, price={self.price}, pr_quantity={self.pr_quantity}, url={self.url})>"

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String(255), nullable=False)
    order_date = Column(DateTime, nullable=False)

    def __repr__(self):
        return f"<Order(id={self.id}, customer_name={self.customer_name}, order_date={self.order_date})>"

class OrderProduct(Base):
    __tablename__ = "orderproducts"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"), nullable=False)  # Связь с таблицей orders
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)  # Связь с таблицей products
    quantity = Column(Integer, nullable=False)

    def __repr__(self):
        return f"<OrderProduct(id={self.id}, order_id={self.order_id}, product_id={self.product_id}, quantity={self.quantity})>"