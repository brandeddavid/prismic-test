import React from "react";
import { storiesOf } from "@storybook/react";
import CartCount from "./cartCount";

storiesOf("Components/CartCount", module)
  .addParameters({ component: CartCount })
  .add("default", () => <CartCount count={1} />);
