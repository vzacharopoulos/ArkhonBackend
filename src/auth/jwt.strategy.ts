// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'your_jwt_secret', // match your JwtModule secret!
    });
  }

  async validate(payload: any) {
    // The payload is the JWT payload
    return {
      userId: payload.userId,
      role: payload.role,
      sub: payload.sub,
    };
  }
}
