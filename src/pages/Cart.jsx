import { FaLongArrowAltLeft } from "react-icons/fa";
import { CartCard } from "../CartComponents/CartCard";
import { CartSummary } from "../CartComponents/CartSummary";
import { CartTableHeader } from "../CartComponents/CartTableHeader";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartItems, setCartItems } = useContext(MainContext);
  return (
    <div className="container mx-auto mt-10">
      <div className="my-10 grid grid-cols-1 shadow-md md:grid-cols-[70%_1fr]">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
            <h2 className="text-2xl font-semibold">3 Items</h2>
          </div>
          <CartTableHeader />
          {cartItems.map((product) => (
            <CartCard product={product} key={product.pid} />
          ))}

          <Link
            to={"/"}
            className="mt-10 flex items-center gap-2 text-sm font-semibold text-blue-600"
          >
            <FaLongArrowAltLeft />
            Continue Shopping
          </Link>
        </div>
        <CartSummary />
      </div>
    </div>
  );
};
