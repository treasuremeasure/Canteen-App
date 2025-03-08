// src/Header/Header.jsx
import React from "react";

function Header() {
  return (
<div className="relative flex size-full flex-col bg-white justify-between group/design-root overflow-x-hidden">
  <div>
    <div className="flex flex-col gap-2 bg-white p-4 pb-2">
      {/* Обернули текст и иконку в один flex-контейнер */}
      <div className="flex items-center justify-between h-12">
        <p className="text-[#181411] tracking-light text-[28px] font-bold leading-tight m-0">
          Меню
        </p>
        <button
          className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#181411] gap-2 text-base font-bold leading-normal tracking-[0.015em] p-0"
        >
          <div className="text-[#181411]" data-icon="ShoppingCart" data-size="24px" data-weight="regular">
            
          </div>
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Header;