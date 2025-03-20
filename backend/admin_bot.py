import telebot
from telebot.types import ReplyKeyboardMarkup, KeyboardButton
from telebot import TeleBot, types
import requests


TOKEN = "7904611916:AAG0NlhSUHg1FYjRDAHP-DQ_I43nHPG42wg"
bot = telebot.TeleBot(TOKEN)


@bot.message_handler(commands=['start'])
def start(message):
    global user_chat_id
    user_chat_id = message.chat.id  # Сохраняем ID чата из объекта message
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    button = types.KeyboardButton(text='Меню')
    keyboard.add(button)

    bot.send_message(message.chat.id, "Привет! По кнопкам ниже ты можешь выбрать необходимую опцию", reply_markup=keyboard)


@bot.message_handler(func=lambda message: message.text == 'Меню')
def add_meal(message):
    bot.send_message(message.chat.id, "Напиши: название блюда, цену, доступное количество, ссылку на изображение")

@bot.message_handler(content_types=['text'])
def add_product(message):

    message_array = message.text.split(',')
   
    product_data = {
       "itemName": message_array[0],
       "price": message_array[1],
        "pr_quantity": message_array[2],
        "url": message_array[3]
    }

    response = requests.post("http://localhost:8000/products", json=product_data)

    if response.status_code == 200:
        bot.send_message(message.chat.id, "Продукт успешно добавлен!")
    else:
        bot.send_message(message.chat.id, "Ошибка при добавлении продукта: " + response.text)

    print(message_array)


bot.polling()

