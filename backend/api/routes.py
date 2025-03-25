from fastapi import FastAPI, Query
from contextlib import asynccontextmanager
from sqlalchemy import select, insert
from .database import database, engine  # твой импорт базы данных
from .models import Product
from .schemas import ProductCreate
from fastapi.middleware.cors import CORSMiddleware

# подключение к БД
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

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Укажите URL вашего фронтенда
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы (GET, POST и т.д.)
    allow_headers=["*"],  # Разрешить все заголовки
)


# ручки БД
@app.get("/products/")
async def get_products(category: str = Query("Популярное")):
    # Здесь вы можете использовать category для фильтрации продуктов
    query = select(Product).where(Product.category == category)  # Предполагается, что у вас есть поле category в модели Product
    results = await database.fetch_all(query)  # Выполняем запрос
    return results  # Возвращаем результаты

@app.get("/products/")
async def get_products(category: str = Query("Салаты")):
    # Здесь вы можете использовать category для фильтрации продуктов
    query = select(Product).where(Product.category == category)  # Предполагается, что у вас есть поле category в модели Product
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
        url=product.url,
        category=product.category
    )
    await database.execute(query)
    return {"message": "Блюдо успешно добавлено", "Product": product}

@app.get("/search/")
async def search_products(query: str):
    # Создаем запрос для поиска продуктов по названию, начинающемуся с введенной строки
    stmt = select(Product).where(Product.itemname.ilike(f"%{query}%"))  # Используем ilike для нечувствительного к регистру поиска
    results = await database.fetch_all(stmt)  # Выполняем запрос
    return results  # Возвращаем результаты