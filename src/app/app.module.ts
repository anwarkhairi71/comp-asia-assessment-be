import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/users.entity";
import { Brand } from "src/brand/brand.entity";
import { Product } from "src/product/product.entity";
import { Category } from "src/category/category.entity";
import { Order } from "src/order/order.entity";
import { AuthModule } from "src/auth/auth.module";
import { UserModule } from "src/users/users.module";
import { AuthService } from "src/auth/auth.service";
import { AuthController } from "src/auth/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UserController } from "src/users/users.controller";
import { ProductController } from "src/product/product.controller";
import { ProductModule } from "src/product/product.module";
import { OrderModule } from "src/order/order.module";
import { OrderController } from "src/order/order.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: "localhost",
      port: 3306,
      username: "test",
      password: "test",
      database: "test",
      entities: [User, Brand, Product, Category, Order],
      synchronize: true,
    }),
    JwtModule.register({
      secret: "test",
      signOptions: { expiresIn: "600" },
    }),
    AuthModule,
    OrderModule,
    UserModule,
    ProductModule,
  ],
  controllers: [
    AppController,
    AuthController,
    UserController,
    ProductController,
    OrderController,
  ],
  providers: [AppService, AuthService],
})
export class AppModule {}
