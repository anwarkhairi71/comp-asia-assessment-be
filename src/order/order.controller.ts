import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { CreateAccountDTO } from "src/users/dto/user.dto";
import { UserService } from "src/users/users.service";
import { OrderService } from "./order.service";
import { CreateOrderDTO, GetOrderDTO } from "./dto/order.dto";

@ApiTags("order")
@Controller("order")
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post("create")
  @ApiBody({ type: CreateOrderDTO })
  @ApiResponse({ status: 200, description: "Create order successful" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  async login(@Body() body: CreateOrderDTO) {
    return this.orderService.createOrder(body);
  }

  @Get("getOrder")
  @ApiResponse({ status: 200, description: "Create order successful" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  async order(@Query() query: GetOrderDTO) {
    return this.orderService.getOrder(query);
  }
}
