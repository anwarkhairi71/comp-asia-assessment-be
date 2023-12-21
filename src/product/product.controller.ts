import { Controller, Get, Query } from "@nestjs/common";
import {
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiTags,
  ApiQuery,
} from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { CreateAccountDTO } from "src/users/dto/user.dto";
import { GetProductDTO } from "./dto/product.dto";
import { IGetProduct } from "./product.interface";

@ApiTags("product")
@Controller("product")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get("getProduct")
  @ApiResponse({ status: 200, description: "Get product successful" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  async product(@Query() query: GetProductDTO): Promise<IGetProduct[]> {
    return this.productService.getProducts(query);
  }
}
