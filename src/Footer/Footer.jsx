import React, { useState, useContext } from "react";
import { QuantityContext } from "../LIst/ListPopular";
import OrderSuccess from "../Basket/OrderSuccess"; // Поправил импорт с заглавной буквы

export default function Footer(props) {
  const quantity = useContext(QuantityContext);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  function handleShowOrderSuccess() {
    setShowOrderSuccess(true);
  }

  return (
    <>
      {/* Если заказ оформлен - показываем OrderSuccess */}
      {showOrderSuccess ? (
        <OrderSuccess />
      ) : (
        <div className="fixed bottom-0 left-2.5 w-full bg-white p-2">
          {quantity === 0 ? (
            <button
              className="flex left-4 w-11/12 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-gray-200 text-[#181411] text-base font-bold leading-normal tracking-[0.015em]"
              disabled
            >
              <span className="truncate">{props.naming} ({quantity})</span>
            </button>
          ) : (
            <button
              onClick={props.hideQuantity ? handleShowOrderSuccess : props.onShowBasket}
              className="flex left-4 w-11/12 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#ee7f2b] text-[#181411] text-base font-bold leading-normal tracking-[0.015em]"
            >
              {/* Не показываем quantity на кнопке "Заказать" */}
              <span className="truncate">
                {props.naming} {props.hideQuantity ? "" : `(${quantity})`}
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
}
