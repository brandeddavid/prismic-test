import React from "react";
import Link from "next/link";

const Hero = (): JSX.Element => (
  <section className="bg-white flex flex-col">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="flex flex-col w-full mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 no-underline text-4xl font-bold md:text-5xl xl:text-6xl">
          Prismic store
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          Shop Indigenous Made For Everybody
        </p>
        <div className="flex justify-center text-center">
          <Link href="/store">
            <h1>Start shopping</h1>
          </Link>
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
          alt="hero-image"
        />
      </div>
    </div>
  </section>
);

export default Hero;
