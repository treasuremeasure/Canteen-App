import React, { useEffect, useState, useRef } from 'react';
import ItemCard from '../LIst/ItemCard';


function SearchInterface({products, setProducts, selectedItems, handleChoose, handleIncreaseAmount, handleDecreaseAmount }) {

  {/* Поиск */}
  const [searchQuery, setSearchQuery] = useState("")
  const inputRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    inputRef.current?.focus(); 
  }, []);


  useEffect(() => {
    if (!searchQuery.trim()) {
      // если строка пустая — не делаем запрос и очищаем список
      setProducts([]);
      return;
    }
  
    const searchByLetter = async () => {
      try {
        const response = await fetch(`http://localhost:8000/search/?query=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };
  
    searchByLetter();
  }, [searchQuery]);


    return(
      <>
        <div className="px-4 py-3 my-4">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#897361] flex border-none bg-[#f4f2f0] items-center justify-center pl-4 rounded-l-xl border-r-0 "
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              ref={inputRef}
              onChange={handleSearchChange}
              placeholder="Искать..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] focus:border-none h-full placeholder:text-[#897361] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
                      {products.map((product) => (
                        <ItemCard
                          key={product.id}
                          id={product.id}
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
      
      </>
      );
}

export default SearchInterface