export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  productImage: string;
  description: string;
  totalInCart: number;
}

export interface PriceRule {
  productName: string;
  ruleQuantity: number;
  rulePrice: number;
}

export type Products = Product[];
export type PriceRules = PriceRule[];
export type ProductCount = Record<string, number>;
