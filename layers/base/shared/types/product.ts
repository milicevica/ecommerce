export type Product = {
  id: number;
  name: string;
  sku: string;
  thumbnail: string;
  price: number;
  sale?: string;
  salePrice?: number;
  category: number;
  favorite: boolean;
};
