import getProductDiscount from "./getProductDiscount";
import pricingRules from "../data/priceRules.json";

describe("getProductDiscount", () => {
  test("should get product discount", () => {
    const productDiscount = getProductDiscount(1, pricingRules);

    expect(productDiscount).toMatchObject(pricingRules[0]);
  });

  test("should return null if no product discount", () => {
    const productDiscount = getProductDiscount(3, pricingRules);

    expect(productDiscount).toBe(null);
  });
});
