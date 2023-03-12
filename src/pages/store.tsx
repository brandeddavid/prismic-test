/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect } from "react";
import useRetrieveFromLocalStorage from "../hooks/useRetrieveFromLocalStorage";
import { type Product } from "../types";
import ItemCard from "../components/ItemCard/itemCard";

const Store = (): JSX.Element => {
  const [storeItems, setStoreItems] = useRetrieveFromLocalStorage("store");
  const [cartItems, setCartItems] = useRetrieveFromLocalStorage("cart");

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      localStorage.setItem("store", JSON.stringify(storeItems));
    }
  }, [cartItems, storeItems]);

  const getItemCartCount = (id: number): number => {
    const cartItem = cartItems.find((item: Product) => item.id === id);

    // console.log({ id, cartItems, cartItem });

    return cartItem ? cartItem.totalInCart : 0;
  };

  const addItemToCart = (item: Product): void => {
    // Update the cart items array
    const cartItemsCopy = [...cartItems];
    const alreadyInCart = cartItemsCopy.find(
      (cartItem) => cartItem.id === item.id
    );

    if (alreadyInCart === undefined) {
      cartItemsCopy.push({ ...item, totalInCart: 1 });

      return setCartItems(cartItemsCopy);
    }

    if (alreadyInCart !== undefined) {
      const { id, quantity, totalInCart } = item;

      console.log({ id, quantity, totalInCart });
      const otherCartItems = cartItemsCopy.filter(
        (cartItems) => cartItems.id !== item.id
      );
      const updatedCart = [
        ...otherCartItems,
        {
          ...item,
          quantity: item.quantity - 1,
          totalInCart: item.totalInCart + 1,
        },
      ];

      return setCartItems(updatedCart);
    }

    // Update product quantity in the store items array
    const storeItemsCopy = [...storeItems];
    const storeItemToUpdate = storeItemsCopy.indexOf(item);
    const { quantity } = storeItemsCopy[storeItemToUpdate];

    storeItemsCopy[storeItemToUpdate].quantity = quantity - 1;
    setStoreItems(storeItemsCopy);
  };

  // const removeItemFromCart = (item: Product): void => {
  //   const storeItemsCopy = [...storeItems];
  //   const storeItemToUpdate = storeItemsCopy.indexOf(item);
  //   const { quantity } = storeItemsCopy[storeItemToUpdate];

  //   storeItemsCopy[storeItemToUpdate].quantity = quantity + 1;

  //   setStoreItems(storeItemsCopy);
  //   setCartItems([...cartItems, item]);
  // };

  return (
    <>
      <div className="text-3xl font-bold m-5">Store</div>
      {(!storeItems || storeItems.length === 0) && (
        <div className="text-red-500 font-bold m-5">No store products</div>
      )}
      {storeItems && storeItems.length > 0 && (
        <div className="flex flex-col items-center mx-5">
          {storeItems.map((item: Product) => {
            return (
              <ItemCard
                className="my-5"
                item={item}
                key={item.id}
                cartItems={cartItems}
                addItemToCart={addItemToCart}
                addToCartButtonDisabled={item.quantity === 0}
                totalInCart={getItemCartCount}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Store;
