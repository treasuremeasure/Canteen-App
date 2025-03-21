export default function ItemCard({
  id,
  itemName,
  price,
  imageUrl,
  selectedItems,
  handleChoose,
  handleIncreaseAmount,
  handleDecreaseAmount,
  quantity
}) {
  const currentQuantity = selectedItems[id]?.quantity || 0;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md h-full">
      <div
        className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-t-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="flex flex-col justify-between p-3 flex-grow">
        <div>
          <p className="text-[#181411] text-sm font-medium leading-tight">{itemName}</p>
          <p className="text-[#897361] text-xs font-normal leading-tight mt-1">{price} р.</p>
        </div>

        {selectedItems[id] ? (
          <div className="flex items-center justify-between mt-2">
            <button
              className="cursor-pointer px-4 py-1 bg-gray-200 rounded-xl text-lg"
              onClick={() => handleDecreaseAmount(id)}
            >
              -
            </button>
            <p className="text-center font-semibold mx-2 text-sm">
              {currentQuantity}
            </p>
            <button
              className="cursor-pointer px-4 py-1 bg-gray-200 rounded-xl text-lg"
              onClick={() => handleIncreaseAmount(id)}
              disabled={currentQuantity >= quantity}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="cursor-pointer px-3 py-1 bg-gray-200 rounded-lg mt-3 w-full text-sm"
            onClick={() => handleChoose(id, itemName, price, imageUrl)}
          >
            Выбрать
          </button>
        )}
      </div>
    </div>
  );
}
