import React from "react";
import { storiesOf } from "@storybook/react";
import Store from "../pages/store";

storiesOf("Pages/Store", module)
  .addParameters({ component: Store })
  .add("default", () => <Store />);
