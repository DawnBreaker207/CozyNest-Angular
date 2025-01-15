export interface Order {
  _id: string;
  customer_name: string;
  total_amount: number;
  email: string;
  user_id: string;
  phone_number: string;
  shipping_fee: number;
  address: string;
  payment_status: string;
  status: string;

  createdAt: string;
  order_details: OrderDetailType[];
}
interface OrderDetailType {
  total: number;
  coupon: string;
  installation_fee: number;
  products: ProductOrder[];
}
interface SKU {
  _id: string;
  name: string;
  SKU: string;
  image: string[];
}

interface ProductOrder {
  sku_id: SKU;
  quantity: number;
  price: number;
  price_before_discount: number;
  price_discount_percent: number;
  total_money: number;
  _id: string;
  isReviewed: boolean;
}
