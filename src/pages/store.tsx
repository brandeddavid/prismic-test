/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import useRetrieveFromLocalStorage from "../hooks/useRetrieveFromLocalStorage";
import { type Product } from "../types";
import ItemCard from "../components/ItemCard/itemCard";

const Store = (): JSX.Element => {
  const storeItems = useRetrieveFromLocalStorage("store");

  return (
    <>
      <div className="text-3xl font-bold m-5">Store</div>
      {(!storeItems || storeItems.length === 0) && (
        <div className="text-3xl font-bold underline m-5">Store</div>
      )}
      {storeItems && storeItems.length > 0 && (
        <div className="flex flex-col items-center mx-5">
          {storeItems.map(({ id, name, quantity, price }: Product) => {
            return (
              <ItemCard
                className="my-5"
                key={id}
                productName={name}
                unitPrice={price}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Store;
