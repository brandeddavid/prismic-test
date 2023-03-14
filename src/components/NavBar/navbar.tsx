import React, { useState, useContext } from "react";
import Link from "next/link";
import CartCount from "../CartCount/cartCount";
import CartDialog from "../CartDialog/cartDialog";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { type Product } from "../../types";
import { StoreContext } from "../../context/storeContext";

const NavBar = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { storeItems } = useContext(StoreContext);
  const itemsInCart = storeItems.filter(
    (storeItem: Product) => storeItem.totalInCart > 0
  ).length;

  return (
    <>
      <nav
        className="md:mb-14 border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900 fixed top-0 left-0 right-0"
        data-testid="navbar"
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Prismic Store
            </span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
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
                    className="block h-5 w-5 py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
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
