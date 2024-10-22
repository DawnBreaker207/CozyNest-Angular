import { Category } from './category';
import { Variants } from './variants';

export interface Products {
  _id?: string | number | undefined;
  originId: string;
  name: string;
  thumbnail: string;
  categoryId: Category;
  brand: string;
  description: string;
  price: number;
  discount: number;
  sold: number;
  isSale: boolean;
  SKU: string;
  variant: Variants[];
  images: string[];
  createAt: string;
  updatedAt: string;
}
