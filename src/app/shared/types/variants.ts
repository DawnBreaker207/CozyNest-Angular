export interface Variants {
  option_id: {
    _id: string;
    name: string;
  };
  option_value_id: { _id: string; value: string };
  sku_id: {
    price_discount_percent: number;
    price_before_discount: number;
    _id: string;
    SKU: string;
    name: string;
    image: string[];
    price: number;
    stock: number;
    sold: number;
    deleted: boolean;
  };
}
