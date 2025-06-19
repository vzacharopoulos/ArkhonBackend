import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Users } from "./Users.entity";
import { Location } from "./Location.entity";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Coils } from "./Coils.entity";

@ObjectType()
@Entity("UserLocationAccess", { schema: "dbo" })
export class UsersLocationAccess {
  @PrimaryColumn({ name: 'user_id' })
  @Field() // expose in GraphQL if needed
  userId: string;

  @PrimaryColumn({ name: 'location_id' })
  @Field(() => Int) // expose in GraphQL if needed
  locationId: number;

  @Column({ name: 'IsActive', default: true }) // your column is IsActive (case sensitive!)
  @Field() // expose in GraphQL if needed
  isActive: boolean;

  @ManyToOne(() => Users, (user) => user.usersLocationAccess)
  @JoinColumn({ name: 'user_id' })
  user: Users;

@Field(() => Location, { nullable: true })
  @ManyToOne(() => Location, (location) => location.usersLocationAccess)
  @JoinColumn({ name: 'location_id' })
  location: Location;
}