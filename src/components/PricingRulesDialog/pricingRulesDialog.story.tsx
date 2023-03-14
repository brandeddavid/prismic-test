import React from "react";
import { storiesOf } from "@storybook/react";
import PricingRulesDialog from "./pricingRulesDialog";
import storeData from "../../data/storeItems.json";
import pricingRuleData from "../../data/priceRules.json";

storiesOf("Components/PricingRulesDialog", module)
  .addParameters({ component: PricingRulesDialog })
  .add("default", () => (
    <PricingRulesDialog show setOpen={() => {}} productId={1} productName="" />
  ))
  .add("with pricing rule", () => (
    <PricingRulesDialog
      show
      setOpen={() => {}}
      productId={storeData[0].id}
      productName={storeData[0].name}
      pricingRule={pricingRuleData[0]}
    />
  ));
