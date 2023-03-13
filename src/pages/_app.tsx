import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useSetLocalStorage from "../hooks/useSetLocalStorage";
import NavBar from "../components/NavBar/navbar";
import storeItems from "../data/storeItems.json";
import StoreProvider from "../context/storeContext";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useSetLocalStorage("store", storeItems);

  return (
    <StoreProvider>
      <>
        <div className="sticky top-0">
          <NavBar />
        </div>
        <Component {...pageProps} />
      </>
    </StoreProvider>
  );
}
