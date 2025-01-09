import { Category } from './category';
import { Variants } from './variants';

export interface Products {
  sku_id: string;
  _id: string | number;
  name: string;
  thumbnail: string;
  category_id: Category;
  brand: string;
  description: string;
  sold: number;
  isSale: boolean;
  is_hidden: boolean;
  images: string[];
  quantity: number;
  createdAt: string;
  updatedAt: string;
  variants: Variants[];
}
