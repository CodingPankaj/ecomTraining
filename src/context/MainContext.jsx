import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const INR = 84.67;

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) ?? [],
  );

  const [cartCount, setCartCount] = useState(cartItems.length);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartCount(cartItems.length);
  }, [cartItems]);

  return (
    <MainContext.Provider value={{ cartCount, cartItems, setCartItems, INR }}>
      {children}
    </MainContext.Provider>
  );
};
