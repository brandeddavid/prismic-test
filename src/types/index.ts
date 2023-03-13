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
  productId: number;
  productName: string;
  ruleQuantity: number;
  discountedPrice: number;
}

export type Products = Product[];
export type PriceRules = PriceRule[];
