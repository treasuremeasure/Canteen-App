import React, { useContext } from "react";
import { QuantityContext } from "../LIst/ListPopular";

export default function Footer(props) {
  const quantity = useContext(QuantityContext);

  return (
    <>
      {/* Если блюда не выбраны - кнопка будет гореть серым цветом, если выбраны - красным */}
      <div className="fixed bottom-0 left-2.5 w-full bg-white p-4 shadow-md">
        {quantity === 0 ? (
          <button
            className="flex left-4 w-11/12 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-gray-200 text-[#181411] text-base font-bold leading-normal tracking-[0.015em]"
            disabled
          >
            <span className="truncate">{props.naming} ({quantity})</span>
          </button>
        ) : (
          <button
            onClick={props.onShowBasket}
            className="flex left-4 w-11/12 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#ee7f2b] text-[#181411] text-base font-bold leading-normal tracking-[0.015em]"
          >
            {/* Не показываем quantity на кнопке "Заказать" */}
            {props.hideQuantity ? (
              <span className="truncate">{props.naming}</span>
            ) : (
              <span className="truncate">{props.naming} ({quantity})</span>
            )}
          </button>
        )}
      </div>
    </>
  );
}
