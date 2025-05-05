import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo


TOKEN = "7828254230:AAENGiJiy4BnHRk9Ch2Vg8iZj2L6x4FhiwU"
bot = telebot.TeleBot(TOKEN)


# Глобальная переменная для хранения ID чата
user_chat_id = None

@bot.message_handler(commands=['start'])
def start(message):
    global user_chat_id
    user_chat_id = message.chat.id  # Сохраняем ID чата из объекта message
    markup = InlineKeyboardMarkup()
    menu_button = InlineKeyboardButton("Меню", web_app=WebAppInfo(url='https://glawataj36.loclx.io/'))
    markup.add(menu_button)


    bot.send_message(message.chat.id, "Привет! По кнопке ниже ты можешь открыть меню", reply_markup=markup)


bot.polling()

