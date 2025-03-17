import { createContext, useContext, useState } from "react"
import Footer from "../Footer/Footer"
import List from "../LIst/ListPopular";
import axios from "axios";

export default function Basket({onReturnFromBasket, onIncreaseAmount, onDecreaseAmount, setSelectedItems, selectedItems, resetState} ) {
    

   
    
    return (
        <>
           
                <div
                    className="relative flex flex-col min-h-screen bg-white justify-between group/design-root overflow-x-hidden"
                >
                    <div>
                        {/* Верхняя панель */}
                        <div className="flex items-center bg-white p-4 pb-2 justify-between">
                            {/* Левая иконка стрелки */}
                            <button onClick={onReturnFromBasket} className="text-[#1C160C] flex w-12 shrink-0 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                                </svg>
                            </button>

              
                                {/* Заголовок */}
                                <h2 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em] flex-1">
                                    Выбранные блюда
                                </h2>

                                {/* Правая иконка корзины */}
                                <div className="flex w-12 items-center justify-end">
                                    <button
                                        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden
                                                   rounded-full h-12 bg-transparent text-[#1C160C] gap-2 text-base font-bold
                                                   leading-normal tracking-[0.015em] p-0"
                                    >
                                        <div className="text-[#1C160C]">
                                            
                                        </div>
                                    </button>
                                </div>
                        </div>

                        {/* Карточка товара */}
                        {Object.entries(selectedItems).map(([itemName, item]) => (
                        <div key={itemName} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-14 h-14"
                                    style={{
                                        backgroundImage:  `url(${item.url})`,
                                    }}
                                ></div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-[#1C160C] text-base font-medium leading-normal">
                                        {itemName}
                                    </p>
                                    <p className="text-[#A18249] text-sm font-normal leading-normal">
                                        {item.price} р.
                                    </p>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <div className="flex items-center gap-2 text-[#1C160C]">
                                    <button onClick={() => onDecreaseAmount(itemName)} className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#F4EFE6] cursor-pointer">
                                        -
                                    </button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => onIncreaseAmount(itemName)} className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#F4EFE6] cursor-pointer">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>    
                        ))}          
                    </div>

                    {/* Нижняя часть - итоги и кнопка */}
                    <div>
                        <div className="p-4">
                            <div className="flex justify-between gap-x-6 py-2">
                                <p className="text-[#A18249] text-sm font-normal leading-normal">Итого</p>
                                <p className="text-[#1C160C] text-sm font-normal leading-normal text-right">
                                    {Object.values(selectedItems).reduce((total, item) => total + item.price * item.quantity, 0)} р.
                                </p>
                            </div>
                            <div className="flex justify-between gap-x-6 py-2">
                                <p className="text-[#A18249] text-sm font-normal leading-normal">Скидка</p>
                                <p className="text-[#1C160C] text-sm font-normal leading-normal text-right">
                                    0 руб
                                </p>
                            </div>
                        </div>
                        <Footer naming='Заказать' hideQuantity={true} setSelectedItems={setSelectedItems} resetState={resetState} selectedItems={selectedItems}/>
                        <div className="h-5 bg-white"></div>
                    </div>
                </div>
        </>
    );
}

function OrderSuccess({ setSelectedItems, selectedItems, resetState }) {
    
    const [showMenu, setShowMenu] = useState(false)

    console.log(selectedItems)

    function returnToMenu() {
        // Генерируем случайное число от 1 до 100
        const orderNumber = Math.floor(Math.random() * 100) + 1;
        
        // Формируем сообщение о заказе
        const orderDetails = Object.entries(selectedItems).map(([name, item]) => {
            return `${name} - ${item.quantity} шт. x ${item.price} р.`;
        }).join('\n');

        const totalSum = Object.values(selectedItems)
            .reduce((total, item) => total + item.price * item.quantity, 0);

        const message = `
✅ Новый заказ #${orderNumber}!

📋 Состав заказа:
${orderDetails}

💰 Итого: ${totalSum} р.

Статус: Ожидает подтверждения
`;

        // Отправляем сообщение в Telegram
        sendTelegramMessage(message);
        
        // Очищаем корзину и возвращаемся в меню
        setSelectedItems({});
        resetState();
        setShowMenu(true);
    }

    const sendTelegramMessage = async (message) => {
        try {
            await axios.post('http://localhost:5000/send_message', {
                message: message
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error("Ошибка при отправке сообщения:", error);
        }
    }

    return showMenu ? <List /> : (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center gap-6 mb-8">
                <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 64 64" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="32" cy="32" r="32" fill="#4CAF50"/>
                    <path 
                        d="M26.5 38.5L18 30L15 33L26.5 44.5L49.5 21.5L46.5 18.5L26.5 38.5Z" 
                        fill="white"
                    />
                </svg>

                <h1 className="text-[32px] font-bold text-center text-[#1C160C]">
                    Ваш заказ успешно создан!
                </h1>
            </div>

            <button 
                onClick={returnToMenu}
                className="w-full max-w-[480px] h-12 bg-[#ee7f2b] rounded-full text-black font-bold"
            >
                Вернуться обратно в бота
            </button>
        </div>
    )
}

export {OrderSuccess}