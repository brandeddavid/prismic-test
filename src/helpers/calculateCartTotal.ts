import { type PriceRules, type Products, type Product } from "../types";
import calculateItemTotal from "./calculateItemTotal";

const calculateCartTotal = (
  itemsInCart: Products,
  pricingRules: PriceRules
): number =>
  itemsInCart.reduce((acc: number, item: Product) => {
    const cartTotal: number = calculateItemTotal(item, pricingRules);

    return acc + cartTotal;
  }, 0);

export default calculateCartTotal;
