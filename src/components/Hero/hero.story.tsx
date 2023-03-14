import React from "react";
import { storiesOf } from "@storybook/react";
import Hero from "./hero";

storiesOf("Components/Hero", module)
  .addParameters({ component: Hero })
  .add("default", () => <Hero />);
