import { Products } from './products';

export interface Category {
  _id: string | undefined;
  name: string;
  isHidden: boolean;
  thumbnail: string;
  products: Products[];
  createdAt: string;
  updatedAt: string;
  type: 'normal' | 'default';
}
