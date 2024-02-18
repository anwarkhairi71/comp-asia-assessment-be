import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { Reservation } from "src/model/reservation/reservation.model";
import { ReservationService } from "./reservation.service";
import { ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";
import * as moment from "moment";
import { Area } from "src/model/area/area.model";

export class ReserveDTO {
  @IsString()
  @ApiProperty({
    required: true,
    example: 1,
    description: "Area ID",
  })
  readonly area_id: number;

  @IsNumber()
  @ApiProperty({
    required: true,
    example: 2,
    description: "Vehicle ID",
  })
  readonly vehicle_id: number;

  @IsDate()
  @ApiProperty({
    required: true,
    example: moment(new Date()).startOf("hour"),
    description: "Start time",
  })
  readonly start_time: Date;

  @IsDate()
  @ApiProperty({
    required: true,
    example: moment(new Date()).add(1, "hour").startOf("hour"),
    description: "Exit time",
  })
  readonly exit_time: Date;
}

export class ReservationListDTO {
  @IsNumber()
  @ApiProperty({
    required: true,
    example: 1,
    description: "Area ID",
  })
  readonly area_id: number;

  @IsDate()
  @ApiProperty({
    required: true,
    example: moment(new Date()).startOf("hour"),
    description: "Start time",
  })
  readonly start_time: Date;
}

export class CancelReservationDTO {
  @IsString()
  @ApiProperty({
    required: true,
    example: "JOHN",
    description: "Owner name",
  })
  readonly owner_name: string;

  @IsDate()
  @ApiProperty({
    required: true,
    example: moment(new Date()).startOf("hour"),
    description: "Start time",
  })
  readonly start_time: Date;
}

@ApiTags("reservation")
@Controller("reservation")
export class ReservationController {
  constructor(
    @Inject(ReservationService)
    private readonly reservationService: ReservationService
  ) {}

  @Get("/checkParkingSpot")
  async checkParkingSpot(
    @Query() query: ReservationListDTO
  ): Promise<Reservation[] | Area[]> {
    return await this.reservationService.checkParkingSpot(query);
  }

  @Get("/list")
  async reservationList(
    @Query("booking_date") booking_date: Date
  ): Promise<Reservation[]> {
    return await this.reservationService.reservationList(booking_date);
  }

  @Put("/cancel")
  @ApiResponse({ status: 400, description: "Bad Request" })
  async cancelReservation(
    @Query() query: CancelReservationDTO
  ): Promise<Reservation> {
    return await this.reservationService.cancelReservation(query);
  }

  @Post("/create")
  @ApiResponse({ status: 400, description: "Bad Request" })
  async createReservation(@Body() body: ReserveDTO): Promise<Reservation> {
    return await this.reservationService.reserve(body);
  }
}
