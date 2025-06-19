import { Resolver, Query, Args, Int, Field, ObjectType } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from '../entities/entities/Location.entity'; // adjust path
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { UsersLocationAccess } from 'src/entities/entities/UserLocationAccess.entity';


@ObjectType() // ADD THIS → makes this entity usable in GraphQL

@Entity('Location', { schema: 'dbo' })
export class LocationType {
  @Column('int', { primary: true, name: 'id' })
  @Field(() => Int) // expose in GraphQL
  locationId: number;

  @Column('nvarchar', { name: 'name', nullable: true, length: 50 })
  @Field({ nullable: true }) // expose in GraphQL
  name: string | null;

  @Column('nvarchar', { name: 'shortname', nullable: true, length: 50 })
  @Field({ nullable: true }) // expose in GraphQL
  shortname: string | null;

  @Column('nvarchar', { name: 'whgroup', nullable: true, length: 50 })
  @Field({ nullable: true }) // expose in GraphQL
  whgroup: string | null;

  @Column('int', { name: 'atlaid', nullable: true })
  @Field(() => Int, { nullable: true }) // expose in GraphQL
  atlaid: number | null;

  @Column('nvarchar', { name: 'atlaname', nullable: true, length: 250 })
  @Field({ nullable: true }) // expose in GraphQL
  atlaname: string | null;

  @Column('int', { name: 'comid', nullable: true })
  @Field(() => Int, { nullable: true }) // expose in GraphQL
  comid: number | null;

  @OneToMany(() => UsersLocationAccess, (ula) => ula.location)
  usersLocationAccess: UsersLocationAccess[];
}

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(() => [Location])
  async locations(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Query(() => Location, { nullable: true })
  async location(@Args('locationId', { type: () => Int }) locationId: number): Promise<Location | undefined> {
    return this.locationService.findOne(locationId);
  }
}