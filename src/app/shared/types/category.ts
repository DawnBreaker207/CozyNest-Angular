import { Products } from './products';

export interface Category {
  _id: string;
  name: string;
  isHidden: boolean;
  type: string;
  createAt: string;
  updateAt: string;
  products: Products[];
}
