export interface Order {
  _id: string;
  customer_name: string;
  total_amount: number;
  email: string;
  status: string;
  user_id: string;
  createdAt: string;
  order_details: OrderDetailType[];
}
interface OrderDetailType {
  product_id: string;
  name: string;
  quantity: number;
}
