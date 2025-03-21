from sqlalchemy import Column, Integer, String, Float
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