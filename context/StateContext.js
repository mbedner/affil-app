import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const getLocalStorage = (name) => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem(name);

      if (storage) return JSON.parse(localStorage.getItem(name));

      if (name === "cartItems") return [];

      return 0;
    }
  };

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(getLocalStorage("cartItems"));

  let foundProduct;
  let index;

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    // Some of this may not be needed. Was intended to add multiple quantities to the same item in cart
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
          };
      });

      setCartItems(updatedCartItems);
      toast.success("Product is already in your wishlist");
    } else {
      setCartItems([...cartItems, { ...product }]);
      toast.success("Product has been added to your wishlist");
    }
  };

  const onRemove = (product) => {
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setCartItems(newCartItems);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        onAdd,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
