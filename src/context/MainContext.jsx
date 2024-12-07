import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) ?? [],
  );
  const [cartCount, setCartCount] = useState(cartItems.length);

  return (
    <MainContext.Provider value={{ cartCount }}>
      {children}
    </MainContext.Provider>
  );
};
