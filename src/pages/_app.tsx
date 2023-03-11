import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useSetLocalStorage from "../hooks/useSetLocalStorage";
import NavBar from "../components/NavBar/navbar";
import storeItems from "../data/storeItems.json";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useSetLocalStorage("store", storeItems);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
