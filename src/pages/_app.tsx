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
      <PricingRulesProvider>
        <>
          <div className="mb-20">
            <NavBar />
          </div>
          <Component {...pageProps} />
        </>
      </PricingRulesProvider>
    </StoreProvider>
  );
}
