import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

export default function ListSalads({ selectedItems, setSelectedItems }) {
  const [products, setProducts] = useState([]); // ✅ useState

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products?category=Салаты");
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

  const handleChoose = (id, itemName, price, url, category) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: { itemName, price, pr_quantity: 1, url, category: "Салаты" },
    }));
  };

  const handleIncreaseAmount = (id) => {
    setSelectedItems((prev) => {
      const item = prev[id];
      const product = products.find((p) => p.id === id);

      if (!product) {
        console.error(`Товар с id "${id}" не найден`);
        return prev;
      }

      if (item.pr_quantity >= product.pr_quantity) {
        alert(`Извините, доступно только ${product.pr_quantity} штук`);
        return prev;
      }

      return {
        ...prev,
        [id]: { ...item, quantity: item.pr_quantity + 1 },
      };
    });
  };

  const handleDecreaseAmount = (id) => {
    setSelectedItems((prev) => {
      const item = prev[id];
      if (!item) return prev;

      if (item.pr_quantity <= 1) {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      }

      return {
        ...prev,
        [id]: { ...item, quantity: item.pr_quantity - 1 },
      };
    });
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          itemName={product.itemname}
          price={product.price}
          imageUrl={product.url}
          quantity={product.pr_quantity}
          selectedItems={selectedItems}
          handleChoose={handleChoose}
          handleIncreaseAmount={handleIncreaseAmount}
          handleDecreaseAmount={handleDecreaseAmount}
        />
      ))}
    </div>
  );
}
