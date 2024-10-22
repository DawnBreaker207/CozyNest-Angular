import { ProductModule } from '@/app/modules/admin/product/product.module';

export interface Variants {
  _id: string;
  product_id: ProductModule;
  SKU: string;
  name: string;
  slug: string;
  price: number;
  price_before_discount: number;
  price_discount_percent: number;
  stock: number;
  assets: string[];
  createdAt: string;
  updatedAt: string;
  color: string;
  option_value: [
    {
      label: string;
      value: string;
    },
  ];
}
