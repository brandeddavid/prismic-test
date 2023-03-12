import React from "react";
import { storiesOf } from "@storybook/react";
import ItemCard from "./itemCard";
import storeData from "../../data/storeItems.json";

storiesOf("Components/Item Card", module)
  .addParameters({ component: ItemCard })
  .add("default", () => (
    <ItemCard
      item={storeData[0]}
      addItemToCart={() => {}}
      removeItemFromCart={() => {}}
    />
  ))
  .add("with item added to cart", () => (
    <ItemCard
      item={{ ...storeData[0], totalInCart: 10 }}
      addItemToCart={() => {}}
      removeItemFromCart={() => {}}
    />
  ))
  .add("with exceeded quantity amount", () => (
    <ItemCard
      item={{ ...storeData[0], quantity: 0, totalInCart: 1 }}
      addItemToCart={() => {}}
      removeItemFromCart={() => {}}
    />
  ));
