import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { UsersLocationAccess } from "./UserLocationAccess.entity";
import { Field, ObjectType, Int } from "@nestjs/graphql";
import { Location as LocationEntity } from './Location.entity';

@ObjectType() // REQUIRED for GraphQL
@Entity("Users", { schema: "dbo" })
export class Users {
  @PrimaryColumn({ type: "nvarchar", name: "user_id" })
  @Field() // expose in GraphQL
  userId: string;

  @Column("smallint", { name: "id", nullable: true })
  @Field(() => Int, { nullable: true })
  id: number | null;

  @Column("nvarchar", { name: "role", nullable: true, length: 50 })
  @Field({ nullable: true })
  role: string | null;

  @Column("nvarchar", { name: "name", nullable: true, length: 50 })
  @Field({ nullable: true })
  name: string | null;

  @Column("nvarchar", { name: "password", nullable: true, length: 50 })
  password: string | null; // DO NOT expose password with @Field()

  @Column("nvarchar", { name: "email", nullable: true, length: 50 })
  @Field({ nullable: true })
  email: string | null;

  @Column("nvarchar", { name: "phone", nullable: true, length: 50 })
  @Field({ nullable: true })
  phone: string | null;

  @Column("nvarchar", { name: "atlaname", nullable: true, length: 50 })
  @Field({ nullable: true })
  atlaname: string | null;

  @Column("nvarchar", { name: "name2", nullable: true, length: 50 })
  @Field({ nullable: true })
  name2: string | null;

  @OneToMany(() => UsersLocationAccess, (ula) => ula.user)
  usersLocationAccess: UsersLocationAccess[];

  // Optional: If your MeResolver adds allowedLocations → add this virtual field
 @Field(() => [LocationEntity], { nullable: true })
allowedLocations?: LocationEntity[];
}
