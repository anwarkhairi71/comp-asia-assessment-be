import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class GetProductDTO {
  @IsOptional()
  @ApiProperty({
    required: false,
    example: 1,
    description: "Brand ID",
  })
  readonly brandId?: number;

  @IsOptional()
  @ApiProperty({
    required: false,
    example: 1,
    description: "Category ID",
  })
  readonly categoryId?: number;

  @IsOptional()
  @ApiProperty({
    required: false,
    example: "BlUE",
    description: "COLOR NAME",
  })
  readonly color?: string;
}
