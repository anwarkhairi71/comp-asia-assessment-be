import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Reservation } from "src/model/reservation/reservation.model";
import { ReservationController } from "./reservation.controller";
import { ReservationService } from "./reservation.service";
import { Area } from "src/model/area/area.model";
import { AreaService } from "../area/area.service";
import { VehicleService } from "../vehicle/vehicle.service";
import { Vehicle } from "src/model/vehicle/vehicle.model";

@Module({
  imports: [SequelizeModule.forFeature([Reservation, Area, Vehicle])],
  providers: [ReservationService, AreaService, VehicleService],
  exports: [ReservationService],
  controllers: [ReservationController],
})
export class ReservationModule {}
