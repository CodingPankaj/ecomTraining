import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export const CartSummary = () => {
  const { cartCount, cartItems, INR } = useContext(MainContext);
  const cartTotal = cartItems.reduce(
    (acc, product) => acc + product.price * product.qty,
    0,
  );

  return (
    <div className="w-full px-8 py-10">
      <h1 className="border-b pb-8 text-2xl font-semibold">Order Summary</h1>
      <div className="mb-5 mt-10 flex justify-between">
        <span className="text-sm font-semibold uppercase">
          Items {cartCount}
        </span>
        <span className="text-sm font-semibold">
          {(cartTotal * INR).toFixed(2)}
        </span>
      </div>
      <div>
        <label className="mb-3 inline-block text-sm font-medium uppercase">
          Shipping
        </label>
        <select className="block w-full border border-gray-300 p-2 text-sm text-gray-600">
          <option>Free Shipping</option>
          <option>Standard shipping - ₹49.00</option>
          <option>Fast shipping - ₹99.00</option>
        </select>
      </div>
      <div className="py-5">
        <label className="mb-3 inline-block text-sm font-semibold uppercase">
          Promo Code
        </label>
        <input
          type="text"
          placeholder="Enter your code"
          className="w-full border border-gray-300 p-2 text-sm"
        />
      </div>
      <button className="bg-red-500 px-5 py-2 text-sm uppercase text-white hover:bg-red-600">
        Apply
      </button>
      <div className="mt-8 border-t">
        <div className="flex justify-between py-6 text-sm font-semibold uppercase">
          <span>Total cost</span>
          <span>₹{(cartTotal * INR).toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-500 py-3 text-sm font-semibold uppercase text-white hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};
