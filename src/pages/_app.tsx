import React from "react";
import type { AppProps } from "next/app";
import useSetLocalStorage from "../hooks/useSetLocalStorage";
import NavBar from "../components/NavBar/navbar";
import storeItems from "../data/storeItems.json";
import pricingRules from "../data/priceRules.json";
import StoreProvider from "../context/storeContext";
import PricingRulesProvider from "../context/pricingRulesContext";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useSetLocalStorage("store", storeItems);
  useSetLocalStorage("pricingRules", pricingRules);

  return (
    <StoreProvider>
      <>
        <div className="sticky top-0">
          <NavBar />
        </div>
        <PricingRulesProvider>
          <Component {...pageProps} />
        </PricingRulesProvider>
      </>
    </StoreProvider>
  );
}
