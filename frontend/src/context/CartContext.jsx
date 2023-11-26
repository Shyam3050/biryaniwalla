import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  function addItem(data) {
    setItems((prev) => [...prev, "i"]);
  }
  function removeItem(data) {}
  return (
    <CartContext.Provider
      value={{
        items: items,
        addToCart: addItem,
        removeFromCart: removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
