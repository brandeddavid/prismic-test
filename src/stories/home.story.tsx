import React from "react";
import { storiesOf } from "@storybook/react";
import Home from "../pages";

storiesOf("Pages/Home", module)
  .addParameters({ component: Home })
  .add("default", () => <Home />);
