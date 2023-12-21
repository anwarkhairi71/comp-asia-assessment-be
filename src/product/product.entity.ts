import { Brand } from "src/brand/brand.entity";
import { Category } from "src/category/category.entity";
import { Order } from "src/order/order.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: ["BLUE", "RED", "GREEN", "WHITE", "PURPLE", "SILVER"],
  })
  product_color: string;

  @ManyToOne(() => Brand, (brand) => brand.product) brand: Brand;
  @ManyToOne(() => Category, (category) => category.product) category: Category;
  @OneToMany(() => Order, (order) => order.product) order: Order[];
}
