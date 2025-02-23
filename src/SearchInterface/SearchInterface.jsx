import React, { createContext, useState } from 'react';
import { menuItems } from "./dbExample";

export const SearchQueryContext = createContext();

function SearchInterface() {

  {/* Поиск */}
  const [searchQuery, setSearchQuery] = useState([])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredItems = menuItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  {/* Поиск */}



    return(
      <>
      <SearchQueryContext.Provider value={filteredItems}>
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
              onChange={handleSearchChange}
              placeholder="Искать..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] focus:border-none h-full placeholder:text-[#897361] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 p-4">
        {searchQuery.length > 0 ? (
          filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="flex h-full flex-col gap-4 rounded-xl bg-white shadow-md min-w-40">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                  <div>
                    <p className="text-[#181411] text-base font-medium leading-normal">{item.title}</p>
                    <p className="text-[#897361] text-sm font-normal leading-normal">{item.price} руб</p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Выбрать</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Ничего не найдено по вашему запросу.</p> // Сообщение, если нет совпадений
          )
        ) : (
          <p>Введите название блюда для поиска.</p> // Сообщение, если поле поиска пустое
        )}
      </div>
      </SearchQueryContext.Provider>
      
      </>
      );
}

export default SearchInterface