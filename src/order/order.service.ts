import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/users.entity";
import { In, Repository } from "typeorm";
import { Order } from "./order.entity";
import { CreateOrderDTO, GetOrderDTO } from "./dto/order.dto";
import { Product } from "src/product/product.entity";
import { IGetOrder } from "./order.interface";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderModel: Repository<Order>,
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
    @InjectRepository(Product)
    private readonly productModel: Repository<Product>
  ) {}

  async createOrder(body: CreateOrderDTO): Promise<Order[]> {
    const { userId, productId } = body;

    const user: User = await this.userModel.findOne({ where: { id: userId } });

    const productInfo: Product[] = await this.productModel.find({
      where: { id: In(productId) },
    });

    const order = [];
    if (user && productInfo && productInfo.length > 0) {
      for (const product of productInfo) {
        const orderInfo = new Order();
        orderInfo.product = product;
        orderInfo.user = user;

        order.push(orderInfo);
      }

      await this.orderModel.insert(order);

      return order;
    } else {
      throw new BadRequestException("Incomplete credentials");
    }
  }

  async getOrder(query: GetOrderDTO): Promise<IGetOrder[]> {
    const { userId } = query;

    const user: User = await this.userModel.findOne({ where: { id: userId } });

    const order: Order[] = await this.orderModel.find({
      where: { user },
      relations: ["user", "product"],
    });

    const response = order.map((key) => ({
      orderId: key.id,
      userId: key.user.id,
      name: key.product.name,
      color: key.product.product_color,
    }));

    return response;
  }
}
