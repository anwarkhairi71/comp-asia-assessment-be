import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { User } from "./users.entity";
import { LoginDTO } from "src/auth/dto/auth.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userModel: Repository<User>
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { email } });
  }

  async createOne(body: LoginDTO): Promise<string> {
    try {
      const { email, password } = body;
      await this.userModel.save({
        email,
        password: await bcrypt.hash(password, 10),
      });
      return "Account created";
    } catch (error) {}
  }
}
