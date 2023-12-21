import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./order.entity";
import { Product } from "src/product/product.entity";
import { User } from "src/users/users.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, Product])],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
