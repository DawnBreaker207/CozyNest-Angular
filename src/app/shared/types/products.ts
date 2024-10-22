export interface Products {
  id?: string | number | undefined;
  originId: string;
  name: string;
  thumbnail: string;
  categoryId: string;
  brand: string;
  description: string;
  price: number;
  discount: number;
  sold: number;
  isSale: boolean;
  SKU: string;
  variant: any[];
  images: string[];
  createAt: string;
  updatedAt: string;
}
