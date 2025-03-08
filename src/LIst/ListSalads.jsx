import React, { useState, createContext, useContext } from "react";
import SearchInterface from "../SearchInterface/SearchInterface";
import Header from "../Header/Header";
import Basket from "../Basket/Basket";
import Footer from "../Footer/Footer";

export default function ListSalads(showBasket) {
    return(
        <> 
      {/*Логика отображения интерфейса Корзины*/}
       {showBasket ? (
      
        <SelectedItemsContext.Provider value={selectedItems}>
          <Basket onReturnFromBasket={handleHideBasket} setSelectedItems={setSelectedItems} onIncreaseAmount={handleIncreaseAmount} onDecreaseAmount={handleDecreaseAmount}/>
        </SelectedItemsContext.Provider>
    ) : (
        <>
        {/*Логика отображения интерфейса поиска*/}
          {showSearch ? (
            <SearchInterface />
          ) : (
            <QuantityContext.Provider value={Object.values(selectedItems).reduce((total, item) => total + item.quantity, 0)}>  
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
                      <button className="text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">
                        Популярное
                      </button>
                    </a>
                    <a
                      className="flex flex-col items-center justify-center border-b-[3px] 
                                 border-b-transparent text-[#897361] pb-[13px] pt-4"
                      href="#"
                    >
                      <button className="text-[#897361] text-sm font-bold leading-normal tracking-[0.015em]">
                        Салаты
                      </button>
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
                          320 р.
                        </p>
                      </div>

                      {/* Логика выбора и изменения количества товара Cалата Цезарь */}
                      {selectedItems["Салат Цезарь"] ? (
                        <div className="flex gap-6">
                          <button
                            className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl"
                            onClick={() => handleIncreaseAmount("Салат Цезарь")}
                          >
                            +
                          </button>
                          <p className="py-1.25 font-semibold">{selectedItems["Салат Цезарь"].quantity}</p>
                          <button
                            className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl"
                            onClick={() => handleDecreaseAmount("Салат Цезарь")}
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
                            handleChoose("Салат Цезарь", 320, 'https://cdn.usegalileo.ai/sdxl10/99bc0a3e-adb9-448f-b422-e447f7a72854.png');
                          }}
                        >
                          <span className="truncate cursor-pointer">Выбрать</span>
                        </button>
                      )}
                    </div>
                  </div>


                  {/* Салат Авокадо */}
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

                      {selectedItems["Салат Авокадо"] ? (
                        <div className="flex gap-6">
                          <button
                            className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl"
                            onClick={() => handleIncreaseAmount("Салат Авокадо")}
                          >
                            +
                          </button>
                          <p className="py-1.25 font-semibold">{selectedItems["Салат Авокадо"].quantity}</p>
                          <button
                            className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl"
                            onClick={() => handleDecreaseAmount("Салат Авокадо")}
                          >
                            -
                          </button>
                        </div>
                      ) : (
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer 
                                     items-center justify-center overflow-hidden rounded-xl 
                                     h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm 
                                     font-bold leading-normal tracking-[0.015em]"
                          onClick={() => {
                            handleChoose("Салат Авокадо", 250, 'https://cdn.usegalileo.ai/sdxl10/ad17b129-0ea1-4b24-ae21-e9a990fc94ea.png');
                          }}
                        >
                          <span className="truncate">Выбрать</span>
                        </button>
                      )}
                    </div>
                  </div>




                  {/* Cэндвич Тюна */}
                  <div className="flex h-full flex-col gap-4 rounded-xl bg-white shadow-md min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover 
                                 rounded-xl bg-[url('https://cdn.usegalileo.ai/sdxl10/032aac91-2c80-4374-ab1b-232dab963a6a.png')]"
                    ></div>
                    <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                      <div>
                        <p className="text-[#181411] text-base font-medium leading-normal">
                        Cэндвич "Тюна"
                        </p>
                        <p className="text-[#897361] text-sm font-normal leading-normal">
                          450 р.
                        </p>
                      </div>

                      {selectedItems["Сэндвич Тюна"] ? (
                        <div className="flex gap-6">
                        <button
                          className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl"
                          onClick={() => handleIncreaseAmount("Сэндвич Тюна")}
                        >
                          +
                        </button>
                        <p className="py-1.25 font-semibold">{selectedItems["Сэндвич Тюна"].quantity}</p>
                        <button
                          className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl"
                          onClick={() => handleDecreaseAmount("Сэндвич Тюна")}
                        >
                          -
                        </button>
                      </div>
                      ) :
                        (<button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer 
                                   items-center justify-center overflow-hidden 
                                   rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] 
                                   text-sm font-bold leading-normal tracking-[0.015em]"

                        onClick={() => {handleChoose('Сэндвич Тюна', 450, 'https://cdn.usegalileo.ai/sdxl10/032aac91-2c80-4374-ab1b-232dab963a6a.png')}}
                      >
                        <span className="truncate">Выбрать</span>
                      </button>)}
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
    )
}