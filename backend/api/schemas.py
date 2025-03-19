from pydantic import BaseModel
from typing import Optional

class ProductCreate(BaseModel):
    itemName: str
    price: float
    pr_quantity: int
    url: Optional[str] = None  # Поле url может быть пустым