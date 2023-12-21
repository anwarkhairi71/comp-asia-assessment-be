import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { LoginDTO } from "./dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userService.findOne(email);

      await bcrypt.compare(password, user.password);

      if (user && (await bcrypt.compare(password, user.password))) {
        return user;
      } else if (user.email) {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async generateJwtToken(payload: {
    email: string;
    sub: number;
  }): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

  async login(body: LoginDTO) {
    try {
      const { email, password } = body;
      const user = await this.validateUser(email, password);

      if (!user) {
        throw new UnauthorizedException("Invalid credentials");
      }

      const payload = { email: user.email, sub: user.id };

      return {
        access_token: await this.generateJwtToken(payload),
      };
    } catch (error) {
      throw error;
    }
  }
}
