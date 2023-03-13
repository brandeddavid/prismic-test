import React, { useState, useContext } from "react";
import Link from "next/link";
import CartCount from "../CartCount/cartCount";
import CartDialog from "../CartDialog/cartDialog";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { type Product } from "../../types";
import { StoreContext } from "../../context/storeContext";

const NavBar = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [storeItems] = useContext(StoreContext);
  const itemsInCart = storeItems.filter(
    (storeItem: Product) => storeItem.totalInCart > 0
  ).length;

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Prismic Store
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing-rules"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing Rules
                </Link>
              </li>
              <li>
                <div className="flex relative text-white-500">
                  <Link
                    href="#"
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="block h-5 w-5 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <ShoppingCartIcon className="fill-white-700 hover:fill-gray-100 text-white-700  hover:bg-transparent" />
                    <CartCount
                      count={itemsInCart}
                      className="mx-2 absolute -top-2 -right-7"
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartDialog show={open} setOpen={setOpen} />
    </>
  );
};

export default NavBar;
