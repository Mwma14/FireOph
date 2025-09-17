export type Operator = "MPT" | "OOREDOO" | "ATOM" | "MYTEL";

export type ProductCategory = "Data" | "Minutes" | "Points" | "Packages" | "Beautiful Numbers";

export interface Product {
  id: string;
  operator: Operator;
  category: ProductCategory;
  name: string;
  price: number;
  description: string;
}
