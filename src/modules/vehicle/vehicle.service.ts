import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Vehicle } from "../../model/vehicle/vehicle.model";
import { VehicleDTO, VehicleDetailsDTO } from "./vehicle.controller";

@Injectable()
export class VehicleService {
  constructor(@InjectModel(Vehicle) private vehicleModel: typeof Vehicle) {}

  async vehicleList(): Promise<Vehicle[]> {
    return this.vehicleModel.findAll();
  }

  async vehicleDetails(vehicle_id: number): Promise<Vehicle> {
    const response = await this.vehicleModel.findOne({
      where: { id: vehicle_id },
    });

    if (!response) {
      throw new HttpException(
        "No vehicle with this vehicle ID, please register first",
        HttpStatus.NOT_FOUND
      );
    }
    return response;
  }

  async registerVehicle(body: VehicleDTO): Promise<Vehicle> {
    const { registration_number, owner_name } = body;

    const [vehicle, created] = await this.vehicleModel.findOrCreate({
      where: { registration_number },
      defaults: {
        registration_number,
        owner_name,
      },
    });

    return vehicle;
  }
}
