import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartDialog from "../../src/components/CartDialog/cartDialog";

describe("Cart Dialog", () => {
  test("should render correctly", () => {
    render(<CartDialog show setOpen={() => {}} />);

    const component = screen.getByTestId("cart-dialog");

    expect(component).toBeVisible();
  });
});
