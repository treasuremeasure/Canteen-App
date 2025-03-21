import React, { useState, createContext, useEffect } from "react";
import SearchInterface from "../SearchInterface/SearchInterface";
import Header from "../Header/Header";
import Basket from "../Basket/Basket";
import Footer from "../Footer/Footer";
import ListSalads from "./ListSalads";
import { motion } from "framer-motion";
import ItemCard from "./ItemCard";

export const QuantityContext = createContext();

export default function List() {
  const [showSearch, setShowSearch] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [showBasket, setShowBasket] = useState(false);
  const [showListSalads, setShowListSalads] = useState(false);
  const [products, setProducts] = useState([]);

  console.log(selectedItems);

  const resetState = () => {
    setSelectedItems({});
    setShowBasket(false);
    setShowListSalads(false);
    setShowSearch(false);
  };

  const handleSwitchToSearchInterface = () => setShowSearch(true);
  const handleShowBasket = () => setShowBasket(true);
  const handleHideBasket = () => setShowBasket(false);
  const handleShowListSalads = () => setShowListSalads(true);
  const handleShowPopular = () => setShowListSalads(false);

  function handleChoose(itemName, price, url) {
    setSelectedItems((prev) => ({
      ...prev,
      [itemName]: { price, quantity: 1, url },
    }));
  }

  function handleIncreaseAmount(itemName) {
    setSelectedItems((prev) => {
      const item = prev[itemName];
      if (item.quantity < products.pr_quantity) {
      return {
        ...prev,
        [itemName]: { ...item, quantity: item.quantity + 1 },
       };
      }
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
        return {
          ...prev,
          [itemName]: { ...item, quantity: item.quantity - 1 },
        };
      }
    });
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products/?category=Популярное");
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchProducts();
  }, []);
  
  console.log(products)

  return (
    <>
      {showBasket ? (
        <Basket
          selectedItems={selectedItems}
          onReturnFromBasket={handleHideBasket}
          setSelectedItems={setSelectedItems}
          onIncreaseAmount={handleIncreaseAmount}
          onDecreaseAmount={handleDecreaseAmount}
          resetState={resetState}
        />
      ) : (
        <>
          {showSearch ? (
            <SearchInterface />
          ) : (
            <QuantityContext.Provider
              value={Object.values(selectedItems).reduce(
                (total, item) => total + item.quantity,
                0
              )}
            >
              <Header />

              {/* Поиск */}
              <div className="px-4 py-3 my-4">
                <label className="flex flex-col min-w-[40%] h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div className="text-[#897361] flex border-none bg-[#f4f2f0] items-center justify-center pl-4 rounded-l-xl border-r-0"></div>
                    <input
                      onClick={handleSwitchToSearchInterface}
                      placeholder="Искать..."
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] focus:border-none h-full placeholder:text-[#897361] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    />
                  </div>
                </label>

                {/* Табы */}
                <div className="pb-3">
                  <div className="flex border-b border-[#e6e0db] px-4 gap-8">
                    <button
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                        !showListSalads
                          ? "border-b-[#181411] text-[#181411]"
                          : "border-b-transparent text-[#897361]"
                      }`}
                      onClick={handleShowPopular}
                    >
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                        Популярное
                      </p>
                    </button>

                    <button
                      className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                        showListSalads
                          ? "border-b-[#181411] text-[#181411]"
                          : "border-b-transparent text-[#897361]"
                      }`}
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
                      {products.map((product) => (
                        <ItemCard
                          key={product.id}
                          itemName={product.itemname}
                          price={product.price}
                          imageUrl={product.url}
                          quantity = {product.pr_quantity}
                          selectedItems={selectedItems}
                          handleChoose={handleChoose}
                          handleIncreaseAmount={handleIncreaseAmount}
                          handleDecreaseAmount={handleDecreaseAmount}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              <Footer
                onShowBasket={handleShowBasket}
                naming="Корзина"
                setSelectedItems={setSelectedItems}
                selectedItems={selectedItems}
              />
            </QuantityContext.Provider>
          )}
        </>
      )}
    </>
  );
}

