import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./users.service";
import { LoginDTO } from "src/auth/dto/auth.dto";
import { ApiOperation, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateAccountDTO } from "./dto/user.dto";

@ApiTags("user")
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("create")
  @ApiBody({ type: CreateAccountDTO })
  @ApiResponse({ status: 200, description: "Create account successful" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  async login(@Body() createAccount: CreateAccountDTO) {
    return this.userService.createOne(createAccount);
  }
}
