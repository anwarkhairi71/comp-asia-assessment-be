// src/auth/auth.controller.ts
import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDTO } from "./dto/auth.dto";
import { ApiOperation, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  @ApiOperation({ summary: "Login" })
  @ApiBody({ type: LoginDTO })
  @ApiResponse({ status: 200, description: "Login successful" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  async login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }
}
