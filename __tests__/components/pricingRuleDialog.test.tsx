import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PricingRulesDialog from "../../src/components/PricingRulesDialog/pricingRulesDialog";

describe("Pricing Rules Dialog", () => {
  test("should render correctly", () => {
    render(
      <PricingRulesDialog
        productId={9}
        productName=""
        show
        setOpen={() => {}}
      />
    );

    const component = screen.getByTestId("pricing-rules-dialog");

    expect(component).toBeInTheDocument();
  });
});
