import { Body, Controller, Get, Inject, Post, Put } from "@nestjs/common";
import { Area } from "src/model/area/area.model";
import { AreaService } from "./area.service";
import { ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class AreaDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    example: 1,
    description: "Area id",
  })
  readonly area_id: number;

  @IsOptional()
  @ApiProperty({
    required: true,
    example: "Parking C",
    description: "Area name",
  })
  readonly area_name?: string;

  @IsOptional()
  @ApiProperty({
    required: true,
    example: 3,
    description: "Parking quantity",
  })
  readonly parking_quantity?: number;
}

@ApiTags("area")
@Controller("area")
export class AreaController {
  constructor(
    @Inject(AreaService)
    private readonly areaService: AreaService
  ) {}

  @Get()
  async getAreaList(): Promise<Area[]> {
    return await this.areaService.areaList();
  }

  @Put("/edit")
  @ApiResponse({ status: 400, description: "Bad Request" })
  async editArea(@Body() body: AreaDTO): Promise<string> {
    return await this.areaService.editArea(body);
  }

  @Post("/create")
  @ApiResponse({ status: 400, description: "Bad Request" })
  async createArea(@Body() body: AreaDTO): Promise<Area> {
    return await this.areaService.createArea(body);
  }
}
