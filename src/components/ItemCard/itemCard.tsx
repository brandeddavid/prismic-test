import React from "react";
import Button from "../Button/button";
import { type Product } from "../../types";
interface ItemCardProps {
  item: Product;
  className?: string;
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
}

const ItemCard = ({
  item,
  className,
  addItemToCart,
  removeItemFromCart,
}: ItemCardProps): JSX.Element => {
  const { name, price, productImage, description, totalInCart, quantity } =
    item;

  return (
    <div
      className={`flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ${
        className ?? ""
      }`}
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={productImage}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>

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
      </div>
    </div>
  );
};

ItemCard.defaultProps = {
  className: "",
};

export default ItemCard;
