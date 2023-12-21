import { Product } from "src/product/product.entity";

export interface IGetOrder {
  orderId: number;
  userId: number;
  name: string;
  color: string;
}
