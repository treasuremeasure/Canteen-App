from sqlalchemy import create_engine, MetaData
from databases import Database

DATABASE_URL = "postgresql+asyncpg://postgres:postgres@localhost/canteen_app"

database = Database(DATABASE_URL)
metadata = MetaData()

# Создание движка SQLAlchemy (необязательно, если вы используете только databases)
engine = create_engine(DATABASE_URL)