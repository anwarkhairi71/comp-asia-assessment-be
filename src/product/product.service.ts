import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { User } from "src/users/users.entity";
import { Repository, In } from "typeorm";
import { GetProductDTO } from "./dto/product.dto";
import { Brand } from "src/brand/brand.entity";
import { Category } from "src/category/category.entity";
import { IGetProduct } from "./product.interface";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productModel: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryModel: Repository<User>,
    @InjectRepository(Brand)
    private readonly brandModel: Repository<Product>
  ) {}

  async getProducts(query: GetProductDTO): Promise<IGetProduct[]> {
    const { brandId, categoryId, color } = query;

    let brand = null;
    let category = null;

    let productArray = [];
    let productObject = {} as any;

    if (brandId && brandId !== null) {
      brand = await this.brandModel.findOne({
        where: { id: brandId },
      });

      productObject.brand = brand;
    }

    if (categoryId && categoryId !== null) {
      category = await this.categoryModel.findOne({
        where: { id: categoryId },
      });

      productObject.category = category;
    }

    if (color && color !== null) productObject.product_color = color;

    if (
      "brand" in productObject ||
      "category" in productObject ||
      "color" in productObject
    )
      productArray.push(productObject);

    const product = await this.productModel.find({
      where: productArray,
      relations: ["brand", "category"],
    });

    const response = product.map((key) => ({
      productId: key.id,
      name: key.name,
      color: key.product_color,
      brand: key.brand.name,
      category: key.category.name,
    }));

    return response;
  }
}
