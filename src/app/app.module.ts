import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Vehicle } from "../model/vehicle/vehicle.model";
import { VehicleModule } from "src/modules/vehicle/vehicle.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Reservation } from "src/model/reservation/reservation.model";
import { Area } from "src/model/area/area.model";
import { ReservationModule } from "../modules/reservation/reservation.module";
import { AreaModule } from "../modules/area/area.module";
import { ReservationController } from "../modules/reservation/reservation.controller";
import { AreaController } from "src/modules/area/area.controller";
import { VehicleController } from "src/modules/vehicle/vehicle.controller";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",
      models: [Vehicle, Reservation, Area],
      autoLoadModels: true,
    }),
    VehicleModule,
    ReservationModule,
    AreaModule,
  ],
  controllers: [
    AppController,
    ReservationController,
    AreaController,
    VehicleController,
  ],
  providers: [AppService],
})
export class AppModule {}
