import React, { useState, createContext, useContext } from "react";
import SearchInterface from "../SearchInterface/SearchInterface";
import Header from "../Header/Header";
import Basket from "../Basket/Basket";
import Footer from "../Footer/Footer";

export const QuantityContext = createContext();
export const SelectedItemsContext = createContext();

export default function List() {

  // Логика после нажатия по полю поиска
  const [showSearch, setShowSearch] = useState(false);

  // Функция для переключения на интерфейс поиска
  function handleSwitchToSearchInterface() {
    setShowSearch(true);
  }

  // Логика после нажатия кнопки "Выбрать"
  const [selectedItems, setSelectedItems] = useState({});
  
  // Функция для выбора товара
  function handleChoose(item) {
    setSelectedItems(prev => ({
      ...prev,
      [item]: true,
    }));
  }

  // Увеличение кол-ва товара
  const [quantity, setQuantity] = useState(0);
  
  // Функция для увеличения количества товара
  function increaseAmount() {
    setQuantity(prev => prev + 1);
  }
  
  // Функция для уменьшения количества товаgра
  function decreaseAmount() {
    setQuantity(prev => prev - 1);
  }


  // Логика отображения интерфейса "Корзина" после нажатия кнопки "Корзина" (тут передаем функцию как колбек в другой компонент)
  const [showBasket, setShowBasket] = useState(false);

  function handleShowBasket() {
    setShowBasket(true)
  }

  function handleHideBasket() {
    setShowBasket(false)
  }

  return (
    <> 
      {/*Логика отображения интерфейса Корзины*/}
       {showBasket ? (
      <SelectedItemsContext.Provider value={selectedItems}>
        <Basket onReturn={handleHideBasket}/>
      </SelectedItemsContext.Provider>
    ) : (
        <>
        {/*Логика отображения интерфейса поиска*/}
          {showSearch ? (
            <SearchInterface />
          ) : (
            <QuantityContext.Provider value={quantity}>
              <Header/>
              <div className="px-4 py-3 my-4">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div
                      className="text-[#897361] flex border-none bg-[#f4f2f0] 
                                 items-center justify-center pl-4 rounded-l-xl border-r-0"
                      data-icon="MagnifyingGlass"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <input
                      onClick={() => {handleSwitchToSearchInterface()}}
                      placeholder="Искать..."
                      className="form-input flex w-full min-w-0 flex-1 resize-none 
                                 overflow-hidden rounded-xl text-[#181411] 
                                 focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] 
                                 focus:border-none h-full placeholder:text-[#897361] 
                                 px-4 rounded-l-none border-l-0 pl-2 text-base 
                                 font-normal leading-normal"
                    />
                  </div>
                </label>

                <div className="pb-3">
                  <div className="flex border-b border-[#e6e0db] px-4 gap-8">
                    <a
                      className="flex flex-col items-center justify-center border-b-[3px] 
                                 border-b-[#181411] text-[#181411] pb-[13px] pt-4"
                      href="#"
                    >
                      <p className="text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">
                        Популярное
                      </p>
                    </a>
                    <a
                      className="flex flex-col items-center justify-center border-b-[3px] 
                                 border-b-transparent text-[#897361] pb-[13px] pt-4"
                      href="#"
                    >
                      <p className="text-[#897361] text-sm font-bold leading-normal tracking-[0.015em]">
                        Салаты
                      </p>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 p-4">
                  {/* Цезарь */}
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white shadow-md min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover 
                                 rounded-xl bg-[url('https://cdn.usegalileo.ai/sdxl10/99bc0a3e-adb9-448f-b422-e447f7a72854.png')]"
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-[#181411] text-base font-medium leading-normal">
                          Салат "Цезарь"
                        </p>
                        <p className="text-[#897361] text-sm font-normal leading-normal">
                          320 руб
                        </p>
                      </div>
                      {/* Логика выбора и изменения количества товара */}
                      {selectedItems["Салат Цезарь"] ? (
                        <div className="flex gap-6">
                          <button
                            className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl"
                            onClick={increaseAmount}
                          >
                            +
                          </button>
                          <p className="py-1.25 font-semibold">{quantity}</p>
                          <button
                            className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl"
                            onClick={decreaseAmount}
                          >
                            -
                          </button>
                        </div>
                      ) : (
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer 
                                     items-center justify-center overflow-hidden 
                                     rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] 
                                     text-sm font-bold leading-normal tracking-[0.015em]"
                          onClick={() => {
                            handleChoose("Салат Цезарь");
                            increaseAmount();
                          }}
                        >
                          <span className="truncate cursor-pointer">Выбрать</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Авокадо */}
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white shadow-md min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover 
                                 rounded-xl bg-[url('https://cdn.usegalileo.ai/sdxl10/ad17b129-0ea1-4b24-ae21-e9a990fc94ea.png')]"
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-[#181411] text-base font-medium leading-normal">
                          Салат "Авокадо"
                        </p>
                        <p className="text-[#897361] text-sm font-normal leading-normal">
                          250 р.
                        </p>
                      </div>
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer 
                                   items-center justify-center overflow-hidden rounded-xl 
                                   h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm 
                                   font-bold leading-normal tracking-[0.015em]"
                      >
                        <span className="truncate">Выбрать</span>
                      </button>
                    </div>
                  </div>

                  {/* Сэндвич "Тюна" */}
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white shadow-md min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover 
                                 rounded-xl bg-[url('https://cdn.usegalileo.ai/sdxl10/032aac91-2c80-4374-ab1b-232dab963a6a.png')]"
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-[#181411] text-base font-medium leading-normal">
                          Сэндвич "Тюна"
                        </p>
                        <p className="text-[#897361] text-sm font-normal leading-normal">
                          450 руб
                        </p>
                      </div>
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer 
                                   items-center justify-center overflow-hidden rounded-xl 
                                   h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm 
                                   font-bold leading-normal tracking-[0.015em]"
                      >
                        <span className="truncate">Выбрать</span>
                      </button>
                    </div>
                  </div>

                  {/* Tuna Sandwich */}
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white shadow-md min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover 
                                 rounded-xl bg-[url('https://cdn.usegalileo.ai/sdxl10/032aac91-2c80-4374-ab1b-232dab963a6a.png')]"
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-[#181411] text-base font-medium leading-normal">
                          Tuna Sandwich
                        </p>
                        <p className="text-[#897361] text-sm font-normal leading-normal">
                          $7.99
                        </p>
                      </div>
                      <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer 
                                   items-center justify-center overflow-hidden 
                                   rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] 
                                   text-sm font-bold leading-normal tracking-[0.015em]"
                      >
                        <span className="truncate">Order Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <Footer onShowBasket={handleShowBasket} naming='Корзина'/>
            </QuantityContext.Provider>
          )}
        </>
      )}
    </>
  );
}

