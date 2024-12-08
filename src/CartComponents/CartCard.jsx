import { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MainContext } from "../context/MainContext";

export const CartCard = ({ product }) => {
  const { INR, cartItems, setCartItems } = useContext(MainContext);
  const { thumbnail, title, brand, price, pid, qty } = product;
  const [cartQty, setCartQty] = useState(1);

  const increaseQty = () => {
    setCartQty(cartQty + 1);
  };

  const decreaseQty = () => {
    if (cartQty > 1) {
      setCartQty(cartQty - 1);
    }
  };

  useEffect(() => {
    const updatecCartQty = cartItems.filter((items) => {
      if (items.pid === pid) {
        items["qty"] = cartQty;
      }
      return items;
    });
    setCartItems(updatecCartQty);
  }, [cartQty]);

  return (
    <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24 object-cover" src={thumbnail} />
        </div>
        <div className="ml-4 flex flex-grow flex-col justify-between">
          <span className="text-sm font-bold">{title}</span>
          <span className="text-xs text-red-500">{brand}</span>
          <button
            onClick={() =>
              setCartItems(cartItems.filter((items) => items.pid !== pid))
            }
            className="w-fit text-xs font-semibold text-gray-500 hover:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex w-1/5 items-center justify-center">
        <button onClick={decreaseQty}>
          <FaMinus />
        </button>
        <input
          className="mx-2 w-10 border bg-white text-center disabled:bg-white"
          type="text"
          value={cartQty}
          disabled
          onChange={(e) => setCartQty(Number(e.target.value))}
        />
        <button onClick={increaseQty}>
          <FaPlus />
        </button>
      </div>
      <span className="w-1/5 text-center text-sm font-semibold">
        ₹ {(price * INR).toFixed(2)}
      </span>
      <span className="w-1/5 text-center text-sm font-semibold">
        ₹ {(price * INR * qty).toFixed(2)}
      </span>
    </div>
  );
};
