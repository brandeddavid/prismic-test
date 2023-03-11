import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button";

storiesOf("Components/Button", module)
  .addParameters({ component: Button })
  .add("default", () => <Button />);
