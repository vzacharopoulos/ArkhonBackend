import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { MeResolver } from './me.resolver';
import { UsersModule } from '../users/users.module';
import { UsersLocationAccessModule } from '../userslocationaccess/Userslocationaccessmodule';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy'; // <--- import JwtStrategy

@Module({
  imports: [
    UsersModule,
    UsersLocationAccessModule,
    PassportModule.register({ defaultStrategy: 'jwt' }), // <--- add PassportModule!
    JwtModule.register({
      secret: 'your_jwt_secret', // use env variable in real app
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthService,
    MeResolver,
    AuthResolver,
    JwtStrategy, // <--- register JwtStrategy
  ],
  exports: [AuthService],
})
export class AuthModule {}