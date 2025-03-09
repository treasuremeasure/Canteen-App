import React, { useContext } from "react";
import SearchInterface from "../SearchInterface/SearchInterface";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { QuantityContext, SelectedItemsContext } from "./ListPopular"; // Импортируем контексты

export default function ListSalads({ selectedItems, handleChoose, handleIncreaseAmount, handleDecreaseAmount }) {
  return (
    <>
      

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 p-4">
            {/* Салат Цезарь */}
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
                  <p className="text-[#897361] text-sm font-normal leading-normal">320 р.</p>
                </div>

                {selectedItems["Салат Цезарь"] ? (
                  <div className="flex gap-6">
                    <button className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl" onClick={() => handleIncreaseAmount("Салат Цезарь")}>
                      +
                    </button>
                    <p className="py-1.25 font-semibold">{selectedItems["Салат Цезарь"].quantity}</p>
                    <button className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl" onClick={() => handleDecreaseAmount("Салат Цезарь")}>
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
                      handleChoose("Салат Цезарь", 320, "https://cdn.usegalileo.ai/sdxl10/99bc0a3e-adb9-448f-b422-e447f7a72854.png");
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
                  <p className="text-[#181411] text-base font-medium leading-normal">Салат "Авокадо"</p>
                  <p className="text-[#897361] text-sm font-normal leading-normal">250 р.</p>
                </div>

                {selectedItems["Салат Авокадо"] ? (
                  <div className="flex gap-6">
                    <button className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl" onClick={() => handleIncreaseAmount("Салат Авокадо")}>
                      +
                    </button>
                    <p className="py-1.25 font-semibold">{selectedItems["Салат Авокадо"].quantity}</p>
                    <button className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl" onClick={() => handleDecreaseAmount("Салат Авокадо")}>
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
                      handleChoose("Салат Авокадо", 250, "https://cdn.usegalileo.ai/sdxl10/ad17b129-0ea1-4b24-ae21-e9a990fc94ea.png");
                    }}
                  >
                    <span className="truncate">Выбрать</span>
                  </button>
                )}
              </div>
            </div>
          </div>
      
     
    </>
  );
}
