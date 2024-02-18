import { Table, Column, Model } from "sequelize-typescript";

@Table({ createdAt: "created_at", updatedAt: "updated_at" })
export class Reservation extends Model {
  @Column({ allowNull: false })
  vehicle_id: number;

  @Column({ allowNull: false })
  area_id: number;

  @Column({ allowNull: false })
  start_time: Date;

  @Column({ allowNull: false })
  exit_time: Date;

  @Column({ defaultValue: "CREATED" })
  status: string;
}
