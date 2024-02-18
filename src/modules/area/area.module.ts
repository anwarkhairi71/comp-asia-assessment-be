import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Area } from "src/model/area/area.model";
import { AreaService } from "./area.service";
import { AreaController } from "./area.controller";

@Module({
  imports: [SequelizeModule.forFeature([Area])],
  providers: [AreaService],
  exports: [AreaService],
  controllers: [AreaController],
})
export class AreaModule {}
