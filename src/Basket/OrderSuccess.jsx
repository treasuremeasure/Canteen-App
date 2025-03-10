import List from "../LIst/ListPopular"
import { useState } from "react"
import axios from "axios"

export default function OrderSuccess({ setSelectedItems }) {
    const [showMenu, setShowMenu] = useState(false)

    function returnToMenu() {
        // Отправляем сообщение в Telegram перед очисткой корзины
        sendTelegramMessage("✅ Новый заказ создан!\n\nСтатус: Ожидает подтверждения")
        
        // Очищаем корзину при возврате в меню
        setSelectedItems({})
        setShowMenu(true)
    }

    const sendTelegramMessage = async (message) => {
        try {
            await axios.post('http://localhost:5000/send_message', {
                message: message
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            console.error("Ошибка при отправке сообщения:", error)
        }
    }

    return (
        showMenu ? (
            <List />
        ) : (
            <div className="fixed inset-0 bg-white flex flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center gap-6 mb-8">
                    {/* Чекмарк */}
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

                    {/* Текст успешного заказа */}
                    <h1 className="text-[32px] font-bold text-center text-[#1C160C]">
                        Ваш заказ успешно создан!
                    </h1>
                </div>

                {/* Кнопка возврата в меню */}
                <button 
                    onClick={() => {returnToMenu()}}
                    className="w-full max-w-[480px] h-12 bg-[#ee7f2b] rounded-full text-black font-bold"
                >
                    Вернуться в меню
                </button>
            </div>
        )
    )
}