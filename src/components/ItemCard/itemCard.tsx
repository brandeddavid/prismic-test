import React, { useState } from "react";
import Button from "../Button/button";
import { type Product, type PriceRule } from "../../types";
import PricingRulesDialog from "../PricingRulesDialog/pricingRulesDialog";

interface ItemCardProps {
  item: Product;
  className?: string;
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
  isDiscounted: boolean;
  productDiscount?: PriceRule | null;
}

const ItemCard = ({
  item,
  className,
  addItemToCart,
  removeItemFromCart,
  isDiscounted,
  productDiscount,
}: ItemCardProps): JSX.Element => {
  const { id, name, price, productImage, description, totalInCart, quantity } =
    item;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ${
          className ?? ""
        }`}
      >
        <img
          className="object-cover w-full mr-5 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={productImage}
          alt=""
        />
        <div className="flex flex-col justify-between leading-normal mr-5">
          <div className="flex justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </h5>
            <Button
              cssClass="link-button"
              onClick={() => {
                setOpen(true);
              }}
            >
              {isDiscounted ? "Edit pricing rule" : "Add pricing rule"}
            </Button>
          </div>

          <div className="">
            <p className="mb-3 font-normal text-gray-700 whitespace-normal max-h-30 text-ellipsis truncate max-w-10">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">{`$${price}`}</span>
            {totalInCart > 0 ? (
              <div className="flex justify-center items-center">
                <Button
                  onClick={() => {
                    removeItemFromCart(item);
                  }}
                >
                  -
                </Button>
                <div className="w-10 text-center">{totalInCart}</div>
                <Button
                  onClick={() => {
                    addItemToCart(item);
                  }}
                  disabled={quantity === 0}
                >
                  +
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  addItemToCart(item);
                }}
                disabled={quantity === 0}
              >
                Add to cart
              </Button>
            )}
          </div>
          {isDiscounted && (
            <p className="text-red-400 text-sm">{`Buy ${
              productDiscount?.ruleQuantity ?? ""
            } for $${productDiscount?.discountedPrice ?? ""}`}</p>
          )}
        </div>
      </div>
      <PricingRulesDialog
        show={open}
        setOpen={setOpen}
        pricingRule={productDiscount}
        productName={name}
        productId={id}
      />
    </>
  );
};

ItemCard.defaultProps = {
  className: "",
  isDisCounted: false,
  productDiscount: null,
};

export default ItemCard;
