import React from "react";
import { storiesOf } from "@storybook/react";
import CartDialog from "./cartDialog";

storiesOf("Components/CartDialog", module)
  .addParameters({ component: CartDialog })
  .add("default", () => <CartDialog show setOpen={() => {}} />);
