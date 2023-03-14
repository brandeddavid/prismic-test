import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartCount from "../../src/components/CartCount/cartCount";

describe("Cart Count", () => {
  test("should render correctly", () => {
    render(<CartCount count={12} />);

    const count = screen.getByTestId("cart-count");

    expect(count).toHaveTextContent("12");
  });
});
