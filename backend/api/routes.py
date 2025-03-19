from fastapi import FastAPI
from contextlib import asynccontextmanager
from sqlalchemy import select, insert
from .database import database, engine  # твой импорт базы данных
from .models import Product
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from .schemas import ProductCreate


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Подключаемся к базе данных перед запуском сервера
    await database.connect()
    print("📡 Database connected!")  # для отладки

    yield  # приложение работает

    # Отключаемся от базы данных после остановки сервера
    await database.disconnect()
    print("❌ Database disconnected!")  # для отладки

app = FastAPI(lifespan=lifespan)

@app.get("/products",
         tags=["Работа с БД"],
         summary="Достаем все записи из таблицы products")
async def get_products():
    query = select(Product)  # Создаем запрос для получения всех продуктов
    results = await database.fetch_all(query)  # Выполняем запрос
    return results  # Возвращаем результаты


@app.post("/products",
          tags=["Работа с БД"],
          summary="Добавляем запись в таблицу products")
async def create_product(product: ProductCreate):
    query = insert(Product).values(
        itemname=product.itemName,
        price=product.price,
        pr_quantity=product.pr_quantity,
        url=product.url
    )
    await database.execute(query)
    return {"message": "Блюдо успешно добавлено", "Product": product}