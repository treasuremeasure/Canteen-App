import React from "react";

export default function ListSalads({ selectedItems, handleChoose, handleIncreaseAmount, handleDecreaseAmount }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Салат Цезарь */}
      <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md h-full">
        <div
          className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-xl"
          style={{ backgroundImage: `url('https://cdn.usegalileo.ai/sdxl10/99bc0a3e-adb9-448f-b422-e447f7a72854.png')` }}
        ></div>
        <div className="flex flex-col justify-between p-3 flex-grow">
          <div>
            <p className="text-[#181411] text-sm font-medium leading-tight">Салат "Цезарь"</p>
            <p className="text-[#897361] text-xs font-normal leading-tight mt-1">320 р.</p>
          </div>

          {selectedItems["Салат Цезарь"] ? (
            <div className="flex items-center justify-between mt-2">
              <button
                className="cursor-pointer px-4 py-1 bg-gray-200 rounded-xl  text-sm"
                onClick={() => handleDecreaseAmount("Салат Цезарь")}
              >
                -
              </button>
              <p className="text-center font-semibold mx-2 text-sm">
                {selectedItems["Салат Цезарь"].quantity}
              </p>
              <button
                className="cursor-pointer px-4 py-1 bg-gray-200 rounded-xl  text-sm"
                onClick={() => handleIncreaseAmount("Салат Цезарь")}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="cursor-pointer px-3 py-1 bg-gray-200 rounded-lg mt-2 w-full text-sm"
              onClick={() => handleChoose("Салат Цезарь", 320, "https://cdn.usegalileo.ai/sdxl10/99bc0a3e-adb9-448f-b422-e447f7a72854.png")}
            >
              Выбрать
            </button>
          )}
        </div>
      </div>

      {/* Салат Авокадо */}
      <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md h-full">
        <div
          className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-xl"
          style={{ backgroundImage: `url('https://cdn.usegalileo.ai/sdxl10/ad17b129-0ea1-4b24-ae21-e9a990fc94ea.png')` }}
        ></div>
        <div className="flex flex-col justify-between p-3 flex-grow">
          <div>
            <p className="text-[#181411] text-sm font-medium leading-tight">Салат "Авокадо"</p>
            <p className="text-[#897361] text-xs font-normal leading-tight mt-1">250 р.</p>
          </div>

          {selectedItems["Салат Авокадо"] ? (
            <div className="flex items-center justify-between mt-2">
              <button
                className="cursor-pointer px-4 py-1 bg-gray-200 rounded-xl text-lg"
                onClick={() => handleDecreaseAmount("Салат Авокадо")}
              >
                -
              </button>
              <p className="text-center font-semibold mx-2 text-sm">
                {selectedItems["Салат Авокадо"].quantity}
              </p>
              <button
                className="cursor-pointer px-4 py-1 bg-gray-200 rounded-xl text-lg"
                onClick={() => handleIncreaseAmount("Салат Авокадо")}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="cursor-pointer px-3 py-1 bg-gray-200 rounded-lg mt-2 w-full text-sm"
              onClick={() => handleChoose("Салат Авокадо", 250, "https://cdn.usegalileo.ai/sdxl10/ad17b129-0ea1-4b24-ae21-e9a990fc94ea.png")}
            >
              Выбрать
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
