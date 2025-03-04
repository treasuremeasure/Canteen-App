import { useContext, useState } from "react"
import List, { SelectedItemsContext } from "../LIst/List"
import Footer from "../Footer/Footer"

export default function Basket({onReturnFromBasket}) {

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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                fill="currentColor"
                                                viewBox="0 0 256 256"
                                            >
                                                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                    </div>

                    {/* Блок товара #1 */}
                    <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                        <div className="flex items-center gap-4">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-14 h-14"
                                style={{
                                    backgroundImage:
                                        'url("https://cdn.usegalileo.ai/sdxl10/a68ff3c9-28ef-4b09-a652-6306ac1b5521.png")',
                                }}
                            ></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-[#1C160C] text-base font-medium leading-normal">
                                    Цезарь
                                </p>
                                <p className="text-[#A18249] text-sm font-normal leading-normal">
                                    169 руб
                                </p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <div className="flex items-center gap-2 text-[#1C160C]">
                                <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#F4EFE6] cursor-pointer">
                                    -
                                </button>
                                <input
                                    className="text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-0 
                                               focus:ring-0 focus:border-none border-none appearance-none"
                                    type="number"
                                    value="1"
                                    readOnly
                                />
                                <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#F4EFE6] cursor-pointer">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Блок товара #2 */}
                    <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                        <div className="flex items-center gap-4">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-14 h-14"
                                style={{
                                    backgroundImage:
                                        'url("https://cdn.usegalileo.ai/sdxl10/03d23864-c7c6-4440-b104-ea37d68a7914.png")',
                                }}
                            ></div>
                            <div className="flex flex-col justify-center">
                                <p className="text-[#1C160C] text-base font-medium leading-normal">
                                    Салат авокадо
                                </p>
                                <p className="text-[#A18249] text-sm font-normal leading-normal">
                                    300 руб
                                </p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <div className="flex items-center gap-2 text-[#1C160C]">
                                <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#F4EFE6] cursor-pointer">
                                    -
                                </button>
                                <input
                                    className="text-base font-medium leading-normal w-4 p-0 text-center bg-transparent focus:outline-0 
                                               focus:ring-0 focus:border-none border-none appearance-none"
                                    type="number"
                                    value="1"
                                    readOnly
                                />
                                <button className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#F4EFE6] cursor-pointer">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть - итоги и кнопка */}
                <div>
                    <div className="p-4">
                        <div className="flex justify-between gap-x-6 py-2">
                            <p className="text-[#A18249] text-sm font-normal leading-normal">Итого</p>
                            <p className="text-[#1C160C] text-sm font-normal leading-normal text-right">
                                469 руб
                            </p>
                        </div>
                        <div className="flex justify-between gap-x-6 py-2">
                            <p className="text-[#A18249] text-sm font-normal leading-normal">Скидка</p>
                            <p className="text-[#1C160C] text-sm font-normal leading-normal text-right">
                                0 руб
                            </p>
                        </div>
                    </div>
                    <Footer naming='Заказать' hideQuantity={true} />
                    <div className="h-5 bg-white"></div>
                </div>
            </div>
        </>
    );
}

          