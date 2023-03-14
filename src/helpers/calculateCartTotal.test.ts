import calculateCartTotal from "./calculateCartTotal";
import storeData from "../data/storeItems.json";
import pricingRules from "../data/priceRules.json";
import { type PriceRules } from "..//types";

describe("Calculate Cart Total", () => {
  // Run tests for testcases given in the intruction document.
  // Refer to INSTRUCTION.md for more information

  let priceRules: PriceRules;

  beforeEach(() => {
    priceRules = [
      ...pricingRules,
      {
        productId: 2,
        productName: "Product B",
        ruleQuantity: 2,
        discountedPrice: 45,
      },
    ];
  });

  test("should calculate cart total correctly empty cart", () => {
    const cartTotal = calculateCartTotal([], priceRules);

    expect(cartTotal).toBe(0);
  });

  test("should calculate cart total correctly for A", () => {
    const itemsInCart = [...storeData, { ...storeData[0], totalInCart: 1 }];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(50);
  });

  test("should calculate cart total correctly for AB", () => {
    const itemsInCart = [
      ...storeData,
      { ...storeData[0], totalInCart: 1 },
      { ...storeData[1], totalInCart: 1 },
    ];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(80);
  });

  test("should calculate cart total correctly for CDBA", () => {
    const itemsInCart = [
      ...storeData,
      { ...storeData[2], totalInCart: 1 },
      { ...storeData[3], totalInCart: 1 },
      { ...storeData[1], totalInCart: 1 },
      { ...storeData[0], totalInCart: 1 },
    ];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(115);
  });

  test("should calculate cart total correctly for AA", () => {
    const itemsInCart = [...storeData, { ...storeData[0], totalInCart: 2 }];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(100);
  });

  test("should calculate cart total correctly for AAA", () => {
    const itemsInCart = [...storeData, { ...storeData[0], totalInCart: 3 }];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(130);
  });

  test("should calculate cart total correctly for AAAA", () => {
    const itemsInCart = [...storeData, { ...storeData[0], totalInCart: 4 }];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(180);
  });

  test("should calculate cart total correctly for AAAAA", () => {
    const itemsInCart = [...storeData, { ...storeData[0], totalInCart: 5 }];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(230);
  });

  test("should calculate cart total correctly for AAAAAA", () => {
    const itemsInCart = [...storeData, { ...storeData[0], totalInCart: 6 }];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(260);
  });

  test("should calculate cart total correctly for AAAB", () => {
    const itemsInCart = [
      ...storeData,
      { ...storeData[0], totalInCart: 3 },
      { ...storeData[1], totalInCart: 1 },
    ];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(160);
  });

  test("should calculate item total correctly for items with AAABB", () => {
    const itemsInCart = [
      ...storeData,
      { ...storeData[1], totalInCart: 2 },
      { ...storeData[0], totalInCart: 3 },
    ];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(175);
  });

  test("should calculate item total correctly for items with AAABBD", () => {
    const itemsInCart = [
      ...storeData,
      { ...storeData[1], totalInCart: 2 },
      { ...storeData[0], totalInCart: 3 },
      { ...storeData[3], totalInCart: 1 },
    ];
    const cartTotal = calculateCartTotal(itemsInCart, priceRules);

    expect(cartTotal).toBe(190);
  });
});
