import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemCard from "../../src/components/ItemCard/itemCard";
import storeData from "../../src/data/storeItems.json";

describe("Item Card", () => {
  test("should render correctly", () => {
    render(
      <ItemCard
        item={storeData[0]}
        addItemToCart={() => {}}
        removeItemFromCart={() => {}}
      />
    );

    const component = screen.getByTestId("item-card");

    expect(component).toBeInTheDocument();
  });
});
