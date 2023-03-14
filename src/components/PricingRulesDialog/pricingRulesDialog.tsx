/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { Fragment, useEffect, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { type PriceRule } from "../../types";
import Button from "../Button/button";
import { PricingRulesContext } from "../../context/pricingRulesContext";

interface PricingRulesDialogueProps {
  show: boolean;
  setOpen: (option: boolean) => void;
  pricingRule?: PriceRule | null;
  productName: string;
  productId: number;
}

const PricingRulesDialog = ({
  show,
  setOpen,
  pricingRule,
  productName,
  productId,
}: PricingRulesDialogueProps): JSX.Element => {
  const { pricingRules, setPricingRules } = useContext(PricingRulesContext);

  const [ruleQuantity, setRuleQuantity] = useState<number | string>("");
  const [discountedPrice, setDiscountedPrice] = useState<number | string>("");

  const handleSubmit = (): void => {
    const pricingRulesCopy = [...pricingRules];

    const itemHasPricingRuleSet = pricingRulesCopy.find(
      (item) => item.productName === productName
    );

    if (itemHasPricingRuleSet === undefined) {
      pricingRulesCopy.push({
        productId,
        productName,
        ruleQuantity: Number(ruleQuantity),
        discountedPrice: Number(discountedPrice),
      });

      setPricingRules(pricingRulesCopy);
    } else {
      const updatePricingRules = pricingRulesCopy.map((rule) => {
        return rule.productName === productName
          ? {
              ...rule,
              ruleQuantity: Number(ruleQuantity),
              discountedPrice: Number(discountedPrice),
            }
          : { ...rule };
      });

      setPricingRules(updatePricingRules);
    }

    setOpen(false);
  };

  const removePricingRule = (id: number): void => {
    const pricingRulesCopy = [...pricingRules];

    const updatedRules = pricingRulesCopy.filter(
      (pricingRule) => pricingRule.productId !== id
    );

    setPricingRules(updatedRules);
    setRuleQuantity("");
    setDiscountedPrice("");
    setOpen(false);
  };

  useEffect(() => {
    if (pricingRule !== null) {
      setRuleQuantity(pricingRule?.ruleQuantity ?? 0);
      setDiscountedPrice(pricingRule?.discountedPrice ?? 0);
    }
  }, []);

  return (
    <div data-testid="pricing-rules-dialog">
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

          <div className="fixed inset-0 overflow-hidden">
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
                            {pricingRule !== null
                              ? "Edit pricing rule"
                              : "Add pricing rule"}
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
                        <div className="mt-10">
                          <form
                            onSubmit={(event) => {
                              event.preventDefault();
                              handleSubmit();
                            }}
                          >
                            <label className="relative block">
                              <input
                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 sm:text-sm"
                                placeholder="Enter product name"
                                type="text"
                                value={productName}
                                disabled
                              />
                            </label>
                            <label className="relative block">
                              <input
                                className="mt-10 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 sm:text-sm"
                                placeholder="Enter discount quantity"
                                type="number"
                                value={ruleQuantity}
                                onChange={(event) => {
                                  setRuleQuantity(event.target.value);
                                }}
                              />
                            </label>
                            <label className="relative block">
                              <input
                                className="mt-10 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 sm:text-sm"
                                placeholder="Enter total price after discount"
                                type="number"
                                value={discountedPrice}
                                onChange={(event) => {
                                  setDiscountedPrice(event.target.value);
                                }}
                              />
                            </label>
                            <div className="mt-20 flex justify-between">
                              <div className="grow mr-5">
                                <Button
                                  cssClass="danger"
                                  disabled={pricingRule === null}
                                  onClick={() => {
                                    removePricingRule(productId);
                                  }}
                                >
                                  Remove
                                </Button>
                              </div>
                              <div className="grow ml-5">
                                <Button
                                  cssClass="large"
                                  type="submit"
                                  disabled={
                                    !ruleQuantity ||
                                    Number(ruleQuantity) === 0 ||
                                    !discountedPrice ||
                                    Number(discountedPrice) === 0
                                  }
                                >
                                  Save
                                </Button>
                              </div>
                            </div>
                          </form>
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
    </div>
  );
};

PricingRulesDialog.defaultProps = {
  pricingRule: null,
};

export default PricingRulesDialog;
