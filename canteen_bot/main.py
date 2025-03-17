import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from flask import Flask, request, jsonify
from flask_cors import CORS  # Добавляем импорт CORS

# Замените 'YOUR_BOT_TOKEN' на токен вашего бота
TOKEN = "7828254230:AAENGiJiy4BnHRk9Ch2Vg8iZj2L6x4FhiwU"
bot = telebot.TeleBot(TOKEN)
app = Flask(__name__)

# Настраиваем CORS
CORS(app, resources={
    r"/send_message": {  # Разрешаем CORS для конкретного endpoint
        "origins": ["http://localhost:5173"],  # URL вашего фронтенда
        "methods": ["POST"],  # Разрешаем только POST запросы
        "allow_headers": ["Content-Type"]  # Разрешаем заголовок Content-Type
    }
})

# Глобальная переменная для хранения ID чата
user_chat_id = None

@bot.message_handler(commands=['start'])
def start(message):
    global user_chat_id
    user_chat_id = message.chat.id  # Сохраняем ID чата из объекта message
    markup = InlineKeyboardMarkup()
    menu_button = InlineKeyboardButton("Меню", web_app=WebAppInfo(url=''))
    markup.add(menu_button)

    bot.send_message(message.chat.id, "Привет! По кнопке ниже ты можешь открыть меню", reply_markup=markup)

# Функция для отправки сообщения
def send_message_to_user(text):
    if user_chat_id:  # Проверяем, что ID чата сохранен
        try:
            bot.send_message(user_chat_id, text)
            return True
        except Exception as e:
            print(f"Ошибка при отправке сообщения: {e}")
            return False
    return False

# API для отправки сообщения
@app.route('/send_message', methods=['POST'])
def send_message():
    try:
        data = request.json
        message = data.get('message')
        if not message:
            return jsonify({"error": "Message is required"}), 400
            
        success = send_message_to_user(message)
        if success:
            return jsonify({"status": "success"}), 200
        else:
            return jsonify({"error": "Failed to send message"}), 500
            
    except Exception as e:
        print(f"Ошибка в обработчике send_message: {e}")
        return jsonify({"error": str(e)}), 500

def run_flask():
    app.run(port=5000)

def run_bot():
    bot.polling(none_stop=True)

if __name__ == "__main__":
    # Запускаем Flask и бота в разных потоках
    from threading import Thread
    
    flask_thread = Thread(target=run_flask)
    bot_thread = Thread(target=run_bot)
    
    flask_thread.start()
    bot_thread.start() 