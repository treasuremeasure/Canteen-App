import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

# Замените 'YOUR_BOT_TOKEN' на токен вашего бота
TOKEN = "7828254230:AAENGiJiy4BnHRk9Ch2Vg8iZj2L6x4FhiwU"
bot = telebot.TeleBot(TOKEN)

# URL вашего Mini App (должен поддерживать Telegram Web Apps)
MINI_APP_URL = "https://68c9-62-60-234-198.ngrok-free.app/"

@bot.message_handler(commands=['start'])
def start(message):
    markup = InlineKeyboardMarkup()
    menu_button = InlineKeyboardButton("Меню", web_app=WebAppInfo(url=MINI_APP_URL))
    markup.add(menu_button)

    bot.send_message(message.chat.id, "Привет! По кнопке ниже ты можешь открыть меню", reply_markup=markup)

bot.polling(none_stop=True)
