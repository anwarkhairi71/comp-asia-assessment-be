import { Product } from "src/product/product.entity";
import { User } from "src/users/users.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  order_created: Date;

  @ManyToOne(() => Product, (product) => product.order) product: Product;
  @ManyToOne(() => User, (user) => user.order) user: User;
}
