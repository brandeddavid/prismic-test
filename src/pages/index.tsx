import React from "react";
import Head from "next/head";
import Hero from "../components/Hero/hero";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full flex justify-center text-center">
        <Hero />
      </main>
    </>
  );
}
