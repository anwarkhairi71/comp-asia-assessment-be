import { ApiProperty } from "@nestjs/swagger";

export class LoginDTO {
  @ApiProperty({ example: "john.doe@example.com", description: "User email" })
  readonly email: string;

  @ApiProperty({ example: "secretpassword", description: "User password" })
  readonly password: string;
}
