from pydantic import BaseModel
from typing import Optional, List

class ProductCreate(BaseModel):
    itemName: str
    price: float
    pr_quantity: int
    url: Optional[str] = None  # Поле url может быть пустым
    category: str

class OrderProduct(BaseModel):
    product_id: int
    quantity: int

class OrderCreate(BaseModel):
    customer_name: str
    products: List[OrderProduct]