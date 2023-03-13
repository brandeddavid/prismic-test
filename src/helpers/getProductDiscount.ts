import { type PriceRules, type PriceRule } from "@/types";

const getProductDiscount = (
  id: number,
  pricingRules: PriceRules
): PriceRule | null =>
  pricingRules.find((pricingRule) => pricingRule.productId === id) ?? null;

export default getProductDiscount;
