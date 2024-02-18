import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Reservation } from "src/model/reservation/reservation.model";
import {
  CancelReservationDTO,
  ReservationListDTO,
  ReserveDTO,
} from "./reservation.controller";
import * as moment from "moment";
import { Op } from "sequelize";
import { AreaService } from "../area/area.service";
import { Vehicle } from "src/model/vehicle/vehicle.model";
import { Area } from "src/model/area/area.model";
import * as _ from "lodash";

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation) private reservationModel: typeof Reservation,
    @InjectModel(Vehicle) private vehicleModel: typeof Vehicle,
    @Inject(AreaService)
    private readonly areaService: AreaService
  ) {}

  async reservationList(booking_date: Date): Promise<Reservation[]> {
    const response = await this.reservationModel.findAll({
      where: [
        {
          start_time: {
            [Op.gte]: moment(booking_date).startOf("day").toDate(),
          },
        },
        {
          start_time: {
            [Op.lte]: moment(booking_date).endOf("day").toDate(),
          },
        },
        {
          status: { [Op.ne]: "CANCELLED" },
        },
      ],
    });

    return response;
  }

  async cancelReservation(query: CancelReservationDTO): Promise<any> {
    const { owner_name, start_time } = query;

    const vehicle = await this.vehicleModel.findOne({
      where: {
        owner_name,
      },
      include: {
        model: this.reservationModel,
        where: [
          { start_time: { [Op.gte]: moment(start_time).startOf("day") } },
          { start_time: { [Op.lte]: moment(start_time).endOf("day") } },
        ],
      },
    });

    if (!vehicle)
      throw new HttpException(
        "No reservations with this name on this date",
        HttpStatus.NOT_FOUND
      );

    const reservation = vehicle.reservation[0];

    const status = "CANCELLED";

    const [updated] = await this.reservationModel.update(
      { status },
      {
        where: { id: reservation.id },
      }
    );

    if (updated) {
      return "Booking cancelled";
    } else {
      throw new HttpException(
        "No reservation with this name/date",
        HttpStatus.NOT_FOUND
      );
    }
  }

  async reserve(body: ReserveDTO): Promise<null | Reservation> {
    try {
      const { area_id, vehicle_id, start_time, exit_time } = body;

      if (moment(start_time).isBefore(new Date(), "day")) {
        throw new HttpException(
          `Cannot book on the day before`,
          HttpStatus.BAD_REQUEST
        );
      }

      if (moment(exit_time).isSameOrBefore(start_time, "minute")) {
        throw new HttpException("Wrong date input", HttpStatus.BAD_REQUEST);
      }

      const areaDetails = await this.areaService.areaDetails(area_id);

      const reservation = await this.getParkingSpotDetails(
        start_time,
        exit_time
      );

      let response;
      if (reservation.length === 0) {
        response = await this.reservationModel.create({
          vehicle_id,
          start_time: moment(start_time).startOf("hour"),
          exit_time: moment(exit_time).startOf("hour"),
          area_id,
        });

        return response;
      }

      const checkSameDay = reservation.filter(
        (key) =>
          moment(key.start_time).isSame(start_time, "day") &&
          key.vehicle_id === vehicle_id
      );

      const bookedParking = reservation.filter(
        (key) => key.area_id === area_id
      );

      if (checkSameDay.length > 0) {
        throw new HttpException(
          "Already have a booking on this same day",
          HttpStatus.BAD_REQUEST
        );
      }

      // const bookingDetails = reservation.filter((booking) =>
      //   moment(start_time).isBetween(booking.start_time, booking.exit_time)
      // );

      // if (bookingDetails.length > 0)
      //   throw new HttpException(
      //     "Parking spot booked on this hour/date",
      //     HttpStatus.CONFLICT
      //   );

      const maxParkingSpot = areaDetails.parking_quantity;
      const bookingCount = bookedParking.length;

      if (bookingCount >= maxParkingSpot) {
        throw new HttpException("Parking spot is full", HttpStatus.BAD_REQUEST);
      }

      response = await this.reservationModel.create({
        vehicle_id,
        start_time: moment(start_time).startOf("hour"),
        exit_time: moment(exit_time).startOf("hour"),
        area_id,
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getParkingSpotDetails(start_time: Date, exit_time: Date): Promise<any> {
    try {
      const reservation: Reservation[] = await this.reservationModel.findAll({
        where: [
          {
            start_time: {
              [Op.gte]: moment(start_time).startOf("day").toDate(),
            },
          },
          {
            exit_time: {
              [Op.lte]: moment(exit_time).endOf("day").toDate(),
            },
          },
          { status: { [Op.ne]: "CANCELLED" } },
        ],
      });

      return reservation;
    } catch (err) {
      throw err;
    }
  }

  async checkParkingSpot(
    query: ReservationListDTO
  ): Promise<Reservation[] | Area[]> {
    try {
      const { start_time } = query;

      const reservations = await this.reservationModel.findAll({
        where: [
          { start_time: { [Op.gte]: moment(start_time).startOf("day") } },
          { exit_time: { [Op.lte]: moment(start_time).endOf("day") } },
        ],
        raw: true,
      });

      const area = await this.areaService.areaList();

      const availability = reservations.filter(
        (key) =>
          moment(start_time).isSameOrAfter(key.start_time) &&
          moment(start_time).isSameOrBefore(key.exit_time)
      );

      const availabilityCount = _.countBy(availability, "area_id");

      const areaAvailability = [];

      for (const [key, value] of Object.entries(availabilityCount)) {
        areaAvailability.push({ area_id: Number(key), parking_booked: value });
      }

      let areaDetails = _.values(
        _.mergeWith(
          _.keyBy(area, "id"),
          _.keyBy(areaAvailability, "area_id"),
          (objValue, srcValue) => _.merge(objValue, srcValue)
        )
      ).map((area: Area | typeof areaDetails) => ({
        area_id: area.id,
        area_name: area.area_name,
        available_parking_spot:
          Number(area.parking_quantity) - Number(area.parking_booked),
      }));

      return areaDetails;
    } catch (err) {
      throw err;
    }
  }
}
