// src/auth/auth.module.ts
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strategies/local.strategy";
import { AuthService } from "./auth.service";
import { UserModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { ProductModule } from "src/product/product.module";

@Module({
  imports: [UserModule, PassportModule, JwtModule, ProductModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
