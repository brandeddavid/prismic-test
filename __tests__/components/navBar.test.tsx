import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../../src/components/NavBar/navbar";

describe("Cart Count", () => {
  test("should render correctly", () => {
    render(<NavBar />);

    const component = screen.getByTestId("navbar");

    expect(component).toBeInTheDocument();
  });
});
