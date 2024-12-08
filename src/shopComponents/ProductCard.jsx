import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export const ProductCard = ({ product }) => {
  const { thumbnail, price, title, id, brand } = product;
  const { cartItems, setCartItems } = useContext(MainContext);

  const checkProductsInCart = cartItems.filter((item) => item.pid == id);

  const cartObj = {
    pid: id,
    thumbnail,
    price,
    title,
    brand,
    qty: 1,
  };

  const removeProductFromCart = () => {
    const cartAfterRemovedProduct = cartItems.filter((item) => item.pid !== id);
    setCartItems(cartAfterRemovedProduct);
  };

  return (
    <div className="w-full border bg-white py-5 text-center shadow transition hover:shadow-lg">
      <figure className="w-full">
        <img
          src={thumbnail}
          className="w-full scale-[95%] transition hover:scale-100"
        />
      </figure>
      <div className="px-2">
        <h2 className="pt-4 font-medium">{title}</h2>
        <p className="mt-1">
          <span className="text-yellow-500">
            Rs. {(price * 84.67).toFixed(2)}
          </span>
        </p>
        <p className="mt-3"></p>
        {checkProductsInCart.length == 1 ? (
          <button
            onClick={removeProductFromCart}
            className="scale-[95%] rounded-md bg-red-600 px-4 py-2 text-white transition-all hover:scale-100 hover:shadow-md"
          >
            Remove Cart
          </button>
        ) : (
          <button
            onClick={() => setCartItems([...cartItems, cartObj])}
            className="scale-[95%] rounded-md bg-blue-600 px-4 py-2 text-white transition-all hover:scale-100 hover:shadow-md"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
