import Button from "../components/Button/button";
import React, { useContext, useState } from "react";
import { PricingRulesContext } from "../context/pricingRulesContext";
import PricingRulesDialog from "../components/PricingRulesDialog/pricingRulesDialog";

const PricingRules = (): JSX.Element => {
  const { pricingRules } = useContext(PricingRulesContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex pt-10">
      <div className="grow" />
      <div className="relative overflow-x-auto grow">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-white uppercase bg-gray-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity Discount
              </th>
              <th scope="col" className="px-6 py-3">
                Discounted Price
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {pricingRules.map((pricingRule) => {
              const { productId, productName, ruleQuantity, discountedPrice } =
                pricingRule;
              return (
                <>
                  <tr key={productId} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {productName}
                    </th>
                    <td className="px-6 py-4">{ruleQuantity}</td>
                    <td className="px-6 py-4">{discountedPrice}</td>
                    <td className="px-6 py-4">
                      <Button
                        cssClass="link-button"
                        onClick={() => {
                          setOpen(true);
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                  <PricingRulesDialog
                    show={open}
                    setOpen={setOpen}
                    pricingRule={pricingRule}
                    productName={pricingRule.productName}
                    productId={pricingRule.productId}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="grow" />
    </div>
  );
};

export default PricingRules;
