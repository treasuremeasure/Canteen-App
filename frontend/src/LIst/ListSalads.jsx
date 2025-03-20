import React from "react";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";


export default function ListSalads({ selectedItems, handleChoose, handleIncreaseAmount, handleDecreaseAmount }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products/?category=Салаты");
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

  return (
    <div className="grid grid-cols-2 gap-3">
                      {products.map((product) => (
                        <ItemCard
                          key={product.id}
                          itemName={product.itemname}
                          price={product.price}
                          imageUrl={product.url}
                          selectedItems={selectedItems}
                          handleChoose={handleChoose}
                          handleIncreaseAmount={handleIncreaseAmount}
                          handleDecreaseAmount={handleDecreaseAmount}
                        />
                      ))}
      </div>
  );
}
