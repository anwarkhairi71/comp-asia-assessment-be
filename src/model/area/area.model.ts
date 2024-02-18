import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";
import { Reservation } from "../reservation/reservation.model";

const IParkingSize = ["SMALL", "MEDIUM", "LARGE"];

@Table({ createdAt: "created_at", updatedAt: "updated_at" })
export class Area extends Model {
  @Column({ allowNull: false })
  area_name: string;

  @Column({ allowNull: false })
  parking_quantity: number;

  @HasMany(() => Reservation, "area_id")
  reservation?: Reservation[];
}
