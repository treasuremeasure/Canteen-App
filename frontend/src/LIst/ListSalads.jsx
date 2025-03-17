import React from "react";
import ItemCard from "./ItemCard";

export default function ListSalads({ selectedItems, handleChoose, handleIncreaseAmount, handleDecreaseAmount }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <ItemCard
        itemName="Салат Цезарь"
        price={320}
        imageUrl="https://cdn.usegalileo.ai/sdxl10/99bc0a3e-adb9-448f-b422-e447f7a72854.png"
        selectedItems={selectedItems}
        handleChoose={handleChoose}
        handleIncreaseAmount={handleIncreaseAmount}
        handleDecreaseAmount={handleDecreaseAmount}
      />

      <ItemCard
        itemName="Салат Авокадо"
        price={250}
        imageUrl="https://cdn.usegalileo.ai/sdxl10/ad17b129-0ea1-4b24-ae21-e9a990fc94ea.png"
        selectedItems={selectedItems}
        handleChoose={handleChoose}
        handleIncreaseAmount={handleIncreaseAmount}
        handleDecreaseAmount={handleDecreaseAmount}
      />
    </div>
  );
}
