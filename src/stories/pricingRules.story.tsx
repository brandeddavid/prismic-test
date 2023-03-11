import React from "react";
import { storiesOf } from "@storybook/react";
import PricingRules from "../pages/pricing-rules";

storiesOf("Pages/Pricing Rules", module)
  .addParameters({ component: PricingRules })
  .add("default", () => <PricingRules />);
