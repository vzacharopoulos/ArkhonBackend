import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersLocationAccessService } from './userslocationaccess.service';
import { Location } from '../entities/entities/Location.entity'; // adjust path if needed

@Resolver()
export class UsersLocationAccessResolver {
  constructor(private readonly usersLocationAccessService: UsersLocationAccessService) {}

  @Query(() => [Location])
  async allowedLocations(
    @Args('userId', { type: () => String }) userId: string,
  ): Promise<Location[]> {
    return this.usersLocationAccessService.getAllowedLocationsForUser(userId);
  }
}
