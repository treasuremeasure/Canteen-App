from pydantic import BaseModel
from typing import Optional, List
from typing import Dict

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
    items: Dict[str, ProductCreate]
