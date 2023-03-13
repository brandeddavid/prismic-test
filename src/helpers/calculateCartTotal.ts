import { type Product } from "../types";

const calculateCartTotal = (cartItem: Product): number => {
  return cartItem.price * cartItem.totalInCart;
};

export default calculateCartTotal;
