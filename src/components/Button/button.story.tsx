import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button";

storiesOf("Components/Button", module)
  .addParameters({ component: Button })
  .add("default", () => <Button>Hello</Button>)
  .add("link button", () => <Button cssClass="link-button">Hello</Button>)
  .add("large", () => <Button cssClass="large">Hello</Button>)
  .add("danger", () => <Button cssClass="danger">Hello</Button>);
