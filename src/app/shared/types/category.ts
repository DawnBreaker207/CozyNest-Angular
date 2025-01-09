import { Product } from './products';

export interface Category {
  _id: string | undefined;
  name: string;
  isHidden: boolean;
  thumbnail: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  type: 'normal' | 'default';
}
