import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { Reservation } from "../reservation/reservation.model";

@Table({ createdAt: "created_at", updatedAt: "updated_at" })
export class Vehicle extends Model {
  @Column({ allowNull: true })
  owner_name: string;

  @Column({ allowNull: false, unique: true })
  registration_number: string;

  @HasMany(() => Reservation, "vehicle_id")
  reservation?: Reservation[];
}
