import React, { useState, useContext } from "react";
import { QuantityContext } from "../LIst/ListPopular";
import { OrderSuccess } from "../Basket/Basket";

export default function Footer({ naming, onShowBasket, hideQuantity, setSelectedItems, resetState }) {
  const quantity = useContext(QuantityContext);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  console.log(resetState)

  function handleShowOrderSuccess() {
    setShowOrderSuccess(true);
  }

  return (
    <>
      {showOrderSuccess ? (
        <OrderSuccess setSelectedItems={setSelectedItems} resetState={resetState} />
      ) : (
        <div className="fixed bottom-0 left-2.5 w-full bg-white p-2">
          {quantity === 0 ? (
            <button
              className="flex left-4 w-11/12 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-gray-200 text-[#181411] text-base font-bold leading-normal tracking-[0.015em]"
              disabled
            >
              <span className="truncate">
                {naming} ({quantity})
              </span>
            </button>
          ) : (
            <button
              onClick={hideQuantity ? handleShowOrderSuccess : onShowBasket}
              className="flex left-4 w-11/12 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#ee7f2b] text-[#181411] text-base font-bold leading-normal tracking-[0.015em]"
            >
              {hideQuantity ? (
                <span className="truncate">{naming}</span>
              ) : (
                <span className="truncate">
                  {naming} ({quantity})
                </span>
              )}
            </button>
          )}
        </div>
      )}
    </>
  );
}

