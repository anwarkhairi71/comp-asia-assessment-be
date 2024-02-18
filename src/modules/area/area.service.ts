import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { error } from "console";
import { Area } from "src/model/area/area.model";
import { AreaDTO } from "./area.controller";

@Injectable()
export class AreaService {
  constructor(@InjectModel(Area) private areaModel: typeof Area) {}

  async areaList(): Promise<Area[]> {
    return this.areaModel.findAll({
      raw: true,
      attributes: ["id", "parking_quantity", "area_name"],
    });
  }

  async editArea(body: AreaDTO): Promise<string> {
    try {
      const { area_id, area_name, parking_quantity } = body;
      const [updated] = await this.areaModel.update(
        { area_name, parking_quantity },
        {
          where: { id: area_id },
        }
      );

      if (updated) {
        return "Updated";
      } else {
        throw new HttpException(
          "No area with this area ID",
          HttpStatus.NOT_FOUND
        );
      }
    } catch (err) {
      throw err;
    }
  }

  async createArea(body: AreaDTO): Promise<Area> {
    try {
      const { area_id, area_name, parking_quantity } = body;

      const [area, create] = await this.areaModel.findOrCreate({
        where: { id: area_id },
        defaults: { area_name, parking_quantity },
      });

      return area;
    } catch (err) {
      throw err;
    }
  }

  async areaDetails(area_id: number): Promise<Area> {
    try {
      const response: Area = await this.areaModel.findOne({
        where: { id: area_id },
      });

      if (!response) {
        throw new HttpException(
          "No area with this area ID",
          HttpStatus.NOT_FOUND
        );
      }

      return response;
    } catch (err) {
      throw err;
    }
  }
}
