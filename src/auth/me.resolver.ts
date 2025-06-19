import { Resolver, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from './gql-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { UsersService } from '../users/users.service';

import { Location as LocationEntity } from 'src/entities/entities/Location.entity'; // alias to avoid DOM Location conflict
import { UseGuards } from '@nestjs/common';
import { Users } from 'src/entities/entities/Users.entity';
import { UsersLocationAccessService } from '../userslocationaccess/userslocationaccess.service';

@Resolver(() => Users)
export class MeResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersLocationAccessService: UsersLocationAccessService,
  ) {}

  @Query(() => Users)
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() userPayload: any): Promise<Users & { allowedLocations?: LocationEntity[] }> {
    // Get the user by userId from JWT payload
    const user = await this.usersService.findOne(userPayload.userId);

    // Fetch allowedLocations
    const allowedLocations = await this.usersLocationAccessService.getAllowedLocationsForUser(
      userPayload.userId,
    );

    // Return user + allowedLocations
    return {
      ...user,
      allowedLocations,
    };
  }
}
