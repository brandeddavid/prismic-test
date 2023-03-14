import { type PriceRules, type Product } from "../types";
import getProductDiscount from "./getProductDiscount";

const calculateItemTotal = (
  cartItem: Product,
  pricingRules: PriceRules
): number => {
  const productDiscount = getProductDiscount(cartItem.id, pricingRules);

  if (
    productDiscount !== null &&
    cartItem.totalInCart >= productDiscount.ruleQuantity
  ) {
    const totalDiscountedItems = Math.floor(
      cartItem.totalInCart / productDiscount.ruleQuantity
    );
    const totalNotDiscoutedItems =
      cartItem.totalInCart % productDiscount.ruleQuantity;

    return (
      totalDiscountedItems * productDiscount.discountedPrice +
      totalNotDiscoutedItems * cartItem.price
    );
  }

  return cartItem.price * cartItem.totalInCart;
};

export default calculateItemTotal;
