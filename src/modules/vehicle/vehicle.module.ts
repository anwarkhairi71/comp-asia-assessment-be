import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Vehicle } from "../../model/vehicle/vehicle.model";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";

@Module({
  imports: [SequelizeModule.forFeature([Vehicle])],
  providers: [VehicleService],
  exports: [VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule {}
