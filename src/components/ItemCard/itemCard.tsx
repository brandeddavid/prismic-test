import React from "react";
import Button from "../Button/button";
import useRetrieveFromLocalStorage from "../../hooks/useRetrieveFromLocalStorage";
import { type Product } from "../../types";

// TODO remove optionals
interface ItemCardProps {
  item: Product;
  className?: string;
}

const ItemCard = ({ item, className }: ItemCardProps): JSX.Element => {
  const { id, name, price, productImage, description } = item;
  const [cartItems, setCartItems] = useRetrieveFromLocalStorage("cart");
  const itemInCart = cartItems.find((item: Product) => item.id === id);
  console.log({ cartItems });
  const addItemToCart = (item: Product): void => {
    const neww = [...cartItems];
    const { quantity } = item;
    item.quantity = quantity - 1;
    console.log("Adding", item);
    neww.push(item);
    setCartItems([...cartItems, item]);
  };
  const getItemCartCount = (id: number): number =>
    cartItems.filter((item: Product) => item.id === id).length;

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
          {itemInCart !== undefined ? (
            <div className="flex justify-center">
              <Button>-</Button>
              <div className="w-10 text-center">{getItemCartCount(id)}</div>
              <Button
                onClick={() => {
                  addItemToCart(item);
                }}
                disabled
              >
                +
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => {
                addItemToCart(item);
              }}
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
