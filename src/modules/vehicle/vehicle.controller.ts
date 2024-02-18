import { Body, Controller, Get, Inject, Post, Query } from "@nestjs/common";
import { VehicleService } from "./vehicle.service";
import { Vehicle } from "src/model/vehicle/vehicle.model";
import { ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class VehicleDTO {
  @IsString()
  @ApiProperty({
    required: true,
    example: "ABC123",
    description: "Car registration number",
  })
  readonly registration_number: string;

  @IsOptional()
  @ApiProperty({
    required: false,
    example: "Karr Owener",
    description: "Owner name",
  })
  readonly owner_name?: string;
}

export class VehicleDetailsDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    example: 1,
    description: "Vehicle id",
  })
  readonly vehicle_id: number;
}

@ApiTags("vehicle")
@Controller("vehicle")
export class VehicleController {
  constructor(
    @Inject(VehicleService)
    private readonly vehicleService: VehicleService
  ) {}

  @Get()
  async getVehicle(): Promise<Vehicle[]> {
    return await this.vehicleService.vehicleList();
  }

  @Get("/details")
  async vehicleDetails(
    @Query("vehicle_id") vehicle_id: number
  ): Promise<Vehicle> {
    return await this.vehicleService.vehicleDetails(vehicle_id);
  }

  @Post("/create")
  @ApiResponse({ status: 400, description: "Bad Request" })
  async createReservation(@Body() body: VehicleDTO): Promise<Vehicle> {
    return await this.vehicleService.registerVehicle(body);
  }
}
