import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from flask import Flask, request
from flask_cors import CORS  # Добавляем импорт CORS

# Замените 'YOUR_BOT_TOKEN' на токен вашего бота
TOKEN = "7828254230:AAENGiJiy4BnHRk9Ch2Vg8iZj2L6x4FhiwU"
bot = telebot.TeleBot(TOKEN)
app = Flask(__name__)
CORS(app)  # Добавляем CORS для Flask приложения

# Глобальная переменная для хранения ID чата
user_chat_id = None

@bot.message_handler(commands=['start'])
def start(message):
    global user_chat_id
    user_chat_id = message.chat.id  # Сохраняем ID чата из объекта message
    markup = InlineKeyboardMarkup()
    menu_button = InlineKeyboardButton("Меню", web_app=WebAppInfo(url='https://b897-62-60-234-203.ngrok-free.app'))
    markup.add(menu_button)

    bot.send_message(message.chat.id, "Привет! По кнопке ниже ты можешь открыть меню", reply_markup=markup)

# Функция для отправки сообщения
def send_message_to_user(text):
    if user_chat_id:  # Проверяем, что ID чата сохранен
        bot.send_message(user_chat_id, 'Ваш заказ успешно создан!')

# API для отправки сообщения
@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.json
    message = data.get('message')
    send_message_to_user(message)
    return {"status": "success"}, 200

bot.polling(none_stop=True)

if __name__ == "__main__":
    app.run(port=5000) 