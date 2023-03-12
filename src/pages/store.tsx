/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import useRetrieveFromLocalStorage from "../hooks/useRetrieveFromLocalStorage";
import { type Product } from "../types";
import ItemCard from "../components/ItemCard/itemCard";

const Store = (): JSX.Element => {
  const [storeItems, setStoreItems] = useRetrieveFromLocalStorage("store");
  const [cartItems, setCartItems] = useRetrieveFromLocalStorage("cart");

  const addItemToCart = (item: Product): void => {
    const storeItemsCopy = [...storeItems];
    const storeItemToUpdate = storeItemsCopy.indexOf(item);
    const { quantity } = storeItemsCopy[storeItemToUpdate];

    storeItemsCopy[storeItemToUpdate].quantity = quantity - 1;

    setStoreItems(storeItemsCopy);
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item: Product): void => {
    const storeItemsCopy = [...storeItems];
    const storeItemToUpdate = storeItemsCopy.indexOf(item);
    const { quantity } = storeItemsCopy[storeItemToUpdate];

    storeItemsCopy[storeItemToUpdate].quantity = quantity + 1;

    setStoreItems(storeItemsCopy);
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <div className="text-3xl font-bold m-5">Store</div>
      {(!storeItems || storeItems.length === 0) && (
        <div className="text-3xl font-bold underline m-5">Store</div>
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
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Store;
