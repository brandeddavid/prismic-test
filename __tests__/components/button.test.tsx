import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../src/components/Button/button";

describe("Button", () => {
  test("should render correctly", () => {
    render(<Button>Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Hello");
  });
});
