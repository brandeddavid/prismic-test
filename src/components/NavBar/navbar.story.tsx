import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from "./navbar";

storiesOf("Components/Navbar", module)
  .addParameters({ component: NavBar })
  .add("default", () => <NavBar />);
