import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    example: 1,
    description: "User ID",
  })
  readonly userId: number;

  @IsArray()
  @IsNumber()
  @ApiProperty({
    required: true,
    example: [1, 2, 3],
    description: "Product ID",
  })
  readonly productId: number[];
}

export class GetOrderDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    example: 1,
    description: "User ID",
  })
  readonly userId: number;
}
