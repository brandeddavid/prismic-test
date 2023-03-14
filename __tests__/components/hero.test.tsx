import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../../src/components/Hero/hero";

describe("Hero", () => {
  test("should render correctly", () => {
    render(<Hero />);

    const component = screen.getByTestId("hero-section");

    expect(component).toBeInTheDocument();
  });
});
