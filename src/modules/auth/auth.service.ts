import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async register(name: string, email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      name,
      email,
      password_hash: hash,
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOne(email);

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      throw new UnauthorizedException();
    }

    const userDetails = {
      user_id: user.user_id,
      name: user.name,
      email: user.email,
    };

    return {
      token: this.jwtService.sign({ sub: user.user_id }),
      user: userDetails,
    };
  }
}
