import calculateItemTotal from "./calculateItemTotal";
import storeData from "../data/storeItems.json";
import pricingRules from "../data/priceRules.json";

describe("Calculate Item Total", () => {
  test("should calculate item total correctly for items without discount", () => {
    const itemInCart = { ...storeData[1], totalInCart: 2 };
    const itemTotal = calculateItemTotal(itemInCart, pricingRules);

    expect(itemTotal).toBe(60);
  });

  test("should calculate item total correctly for items with discount", () => {
    const itemInCart = { ...storeData[0], totalInCart: 6 };
    const itemTotal = calculateItemTotal(itemInCart, pricingRules);

    expect(itemTotal).toBe(260);
  });

  test("should calculate item total correctly for items with discount", () => {
    const itemInCart = { ...storeData[0], totalInCart: 5 };
    const itemTotal = calculateItemTotal(itemInCart, pricingRules);

    expect(itemTotal).toBe(230);
  });
});
