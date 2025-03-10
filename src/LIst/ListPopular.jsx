import React, { useState, createContext, useContext } from "react";
import SearchInterface from "../SearchInterface/SearchInterface";
import Header from "../Header/Header";
import Basket from "../Basket/Basket";
import Footer from "../Footer/Footer";
import ListSalads from "./ListSalads";
import { motion } from "framer-motion";

export const QuantityContext = createContext();
export const SelectedItemsContext = createContext();

export default function List() {
  const [showSearch, setShowSearch] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [showBasket, setShowBasket] = useState(false);
  const [showListSalads, setShowListSalads] = useState(false);

  function handleSwitchToSearchInterface() {
    setShowSearch(true);
  }

  function handleChoose(itemName, price, url) {
    setSelectedItems((prev) => {
      const existing = prev[itemName];
      if (!existing) {
        return { ...prev, [itemName]: { price, quantity: 1, url } };
      } else {
        return { ...prev, [itemName]: { ...existing, quantity: existing.quantity + 1 } };
      }
    });
  }

  function handleIncreaseAmount(itemName) {
    setSelectedItems((prev) => {
      const item = prev[itemName];
      return { ...prev, [itemName]: { ...item, quantity: item.quantity + 1 } };
    });
  }

  function handleDecreaseAmount(itemName) {
    setSelectedItems((prev) => {
      const item = prev[itemName];
      if (item.quantity <= 1) {
        const newState = { ...prev };
        delete newState[itemName];
        return newState;
      } else {
        return { ...prev, [itemName]: { ...item, quantity: item.quantity - 1 } };
      }
    });
  }

  function handleShowBasket() {
    setShowBasket(true);
  }

  function handleHideBasket() {
    setShowBasket(false);
  }

  function handleShowListSalads() {
    setShowListSalads(true);
  }

  function handleShowPopular() {
    setShowListSalads(false);
  }

  return (
    <>
      {showBasket ? (
        <SelectedItemsContext.Provider value={selectedItems}>
          <Basket
            onReturnFromBasket={handleHideBasket}
            setSelectedItems={setSelectedItems}
            onIncreaseAmount={handleIncreaseAmount}
            onDecreaseAmount={handleDecreaseAmount}
          />
        </SelectedItemsContext.Provider>
      ) : (
        <>
          {showSearch ? (
            <SearchInterface />
          ) : (
            <QuantityContext.Provider
              value={Object.values(selectedItems).reduce((total, item) => total + item.quantity, 0)}
            >
              <Header />
              <div className="px-4 py-3 my-4">
                <label className="flex flex-col min-w-[40%] h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div className="text-[#897361] flex border-none bg-[#f4f2f0] 
                                 items-center justify-center pl-4 rounded-l-xl border-r-0"
                    ></div>
                    <input
                      onClick={handleSwitchToSearchInterface}
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
                    <button
                      className={`flex flex-col items-center justify-center border-b-[3px] 
                                 pb-[13px] pt-4 ${!showListSalads ? "border-b-[#181411] text-[#181411]" : "border-b-transparent text-[#897361]"}`}
                      onClick={handleShowPopular}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                        Популярное
                      </p>
                    </button>

                    <button
                      className={`flex flex-col items-center justify-center border-b-[3px] 
                                 pb-[13px] pt-4 ${showListSalads ? "border-b-[#181411] text-[#181411]" : "border-b-transparent text-[#897361]"}`}
                      onClick={handleShowListSalads}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                        Салаты
                      </p>
                    </button>
                  </div>
                </div>

                <motion.div
                  key={showListSalads ? "salads" : "popular"}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >

                {showListSalads ? (
                  <ListSalads
                    selectedItems={selectedItems}
                    handleChoose={handleChoose}
                    handleIncreaseAmount={handleIncreaseAmount}
                    handleDecreaseAmount={handleDecreaseAmount}
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {/* Салат Цезарь */}
                    <ItemCard
                      itemName="Салат Цезарь"
                      price={320}
                      imageUrl="https://cdn.usegalileo.ai/sdxl10/99bc0a3e-adb9-448f-b422-e447f7a72854.png"
                      selectedItems={selectedItems}
                      handleChoose={handleChoose}
                      handleIncreaseAmount={handleIncreaseAmount}
                      handleDecreaseAmount={handleDecreaseAmount}
                    />

                    {/* Салат Авокадо */}
                    <ItemCard
                      itemName="Салат Авокадо"
                      price={250}
                      imageUrl="https://cdn.usegalileo.ai/sdxl10/ad17b129-0ea1-4b24-ae21-e9a990fc94ea.png"
                      selectedItems={selectedItems}
                      handleChoose={handleChoose}
                      handleIncreaseAmount={handleIncreaseAmount}
                      handleDecreaseAmount={handleDecreaseAmount}
                    />

                    {/* Сэндвич Тюна */}
                    <ItemCard
                      itemName="Сэндвич Тюна"
                      price={450}
                      imageUrl="https://cdn.usegalileo.ai/sdxl10/032aac91-2c80-4374-ab1b-232dab963a6a.png"
                      selectedItems={selectedItems}
                      handleChoose={handleChoose}
                      handleIncreaseAmount={handleIncreaseAmount}
                      handleDecreaseAmount={handleDecreaseAmount}
                    />
                  </div>
                )}
                </motion.div>
              </div>
              <Footer onShowBasket={handleShowBasket} naming="Корзина" />
            </QuantityContext.Provider>
          )}
        </>
      )}
    </>
  );
}

function ItemCard({
  itemName,
  price,
  imageUrl,
  selectedItems,
  handleChoose,
  handleIncreaseAmount,
  handleDecreaseAmount,
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md h-full">
      <div
        className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="flex flex-col justify-between p-3 flex-grow">
        <div>
          <p className="text-[#181411] text-sm font-medium leading-tight">{itemName}</p>
          <p className="text-[#897361] text-xs font-normal leading-tight mt-1">{price} р.</p>
        </div>

        {selectedItems[itemName] ? (
          <div className="flex items-center justify-between mt-2">
            <button
              className="cursor-pointer px-4 py-1 bg-gray-200 rounded-xl text-lg"
              onClick={() => handleDecreaseAmount(itemName)}
            >
              -
            </button>
            <p className="text-center font-semibold mx-2 text-sm">
              {selectedItems[itemName].quantity}
            </p>
            <button
              className="cursor-pointer px-4 py-1 bg-gray-200 rounded-xl text-lg"
              onClick={() => handleIncreaseAmount(itemName)}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="cursor-pointer px-3 py-1 bg-gray-200 rounded-lg mt-2 w-full text-sm"
            onClick={() => handleChoose(itemName, price, imageUrl)}
          >
            Выбрать
          </button>
        )}
      </div>
    </div>
  );
}

export {ItemCard}
