import { Products } from './products';

export interface Category {
  name: string;
  type: string;
  products: Products[];
}
