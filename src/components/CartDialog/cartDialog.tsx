/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { type Product } from "../../types";
import { StoreContext } from "../../context/storeContext";
import { PricingRulesContext } from "../../context/pricingRulesContext";
import calculateItemTotal from "../../helpers/calculateItemTotal";
import calculateCartTotal from "../../helpers/calculateCartTotal";
import Button from "../Button/button";

interface CartDialogueProps {
  show: boolean;
  setOpen: (option: boolean) => void;
}

const CartDialog = ({ show, setOpen }: CartDialogueProps): JSX.Element => {
  const { storeItems, setStoreItems } = useContext(StoreContext);
  const { pricingRules } = useContext(PricingRulesContext);

  const itemsInCart = storeItems.filter(
    (storeItem: Product) => storeItem.totalInCart > 0
  );

  const cartTotal = calculateCartTotal(itemsInCart, pricingRules);

  const removeFromCart = (item: Product): void => {
    const storeItemsCopy = [...storeItems];

    const updatedStoreItems = storeItemsCopy.map((storeItem: Product) => {
      return storeItem.id === item.id
        ? {
            ...storeItem,
            quantity: storeItem.quantity + storeItem.totalInCart,
            totalInCart: 0,
          }
        : { ...storeItem };
    });

    setStoreItems(updatedStoreItems);
  };

  return (
    <>
      <Transition.Root show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div
            className="fixed inset-0 overflow-hidden"
            data-testid="cart-dialog"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between border-b-2 pb-8 pt-3">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => {
                                setOpen(false);
                              }}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        {itemsInCart.length === 0 && (
                          <div className="text-red-500 font-bold m-5">
                            No product(s) in cart
                          </div>
                        )}

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {itemsInCart.map((item: Product) => (
                                <li key={item.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={item.productImage}
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{item.name}</h3>
                                        <p className="ml-4">
                                          <>
                                            $
                                            {calculateItemTotal(
                                              item,
                                              pricingRules
                                            )}
                                          </>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {item.totalInCart}
                                      </p>

                                      <div className="flex">
                                        <Button
                                          cssClass="link-button"
                                          onClick={() => {
                                            removeFromCart(item);
                                          }}
                                        >
                                          Remove
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${cartTotal}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Button
                            cssClass="large"
                            disabled={itemsInCart.length === 0}
                            testId="checkout-button"
                          >
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CartDialog;
