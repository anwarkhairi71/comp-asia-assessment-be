import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Brand } from "src/brand/brand.entity";
import { Category } from "src/category/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category])],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
