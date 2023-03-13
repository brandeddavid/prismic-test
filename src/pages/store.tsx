/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext } from "react";
import { type Product } from "../types";
import ItemCard from "../components/ItemCard/itemCard";
import { StoreContext } from "../context/storeContext";

const Store = (): JSX.Element => {
  const [storeItems, setStoreItems] = useContext(StoreContext);

  const addItemToCart = (item: Product): void => {
    // Update product quantity and store count in the store items array
    const storeItemsCopy = [...storeItems];

    const updatedStoreItems = storeItemsCopy.map((storeItem: Product) => {
      return storeItem.id === item.id
        ? {
            ...storeItem,
            quantity: storeItem.quantity - 1,
            totalInCart: storeItem.totalInCart + 1,
          }
        : { ...storeItem };
    });

    return setStoreItems(updatedStoreItems);
  };

  const removeItemFromCart = (item: Product): void => {
    // Update product quantity and store count in the store items array
    const storeItemsCopy = [...storeItems];

    const updatedStoreItems = storeItemsCopy.map((storeItem: Product) => {
      return storeItem.id === item.id
        ? {
            ...storeItem,
            quantity: storeItem.quantity + 1,
            totalInCart: storeItem.totalInCart - 1,
          }
        : { ...storeItem };
    });

    return setStoreItems(updatedStoreItems);
  };

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
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Store;
