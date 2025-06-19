import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from '../entities/entities/Users.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UsersType {
  @Field(() => String, { nullable: true })
  userId: string;

  @Field({ nullable: true })
  role: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  atlaname: string;

  @Field({ nullable: true })
  name2: string;
}

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [Users])
  async users(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Query(() => Users, { nullable: true })
  async user(@Args('userId', { type: () => String }) userId: string): Promise<Users | null> {
    return this.usersService.findOne(userId);
  }
}
