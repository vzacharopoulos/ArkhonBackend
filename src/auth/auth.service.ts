import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // adjust path as needed
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './dto/login.response';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginInput: LoginInput): Promise<LoginResponse> {
    const { userId, password } = loginInput;

    // Step 1: Find user by userId
    const user = await this.userService.findOne(userId);

    if (!user) {
      throw new UnauthorizedException('Invalid userId or password');
    }

    // Step 2: Verify password
    const isPasswordValid = password === user.password;
    // If your password is not hashed, use simple check:
    // const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid userId or password');
    }

    // Step 3: Generate JWT token
    const payload = { sub: user.id, userId: user.userId, role: user.role, };

    const accessToken = this.jwtService.sign(payload);

    // Step 4: Return token
    return { accessToken };
  }
}
