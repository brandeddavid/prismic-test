import React from "react";
import { storiesOf } from "@storybook/react";
import ItemCard from "./itemCard";

storiesOf("Components/Item Card", module)
  .addParameters({ component: ItemCard })
  .add("default", () => <ItemCard />);
