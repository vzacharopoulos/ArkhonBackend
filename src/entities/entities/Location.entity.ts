import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { UsersLocationAccess } from "./UserLocationAccess.entity";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Coils } from "./Coils.entity";

@ObjectType()
@Entity("Location", { schema: "dbo" })
export class Location {
  @Column("int", { primary: true, name: "id" })
  @Field(() => Int)
  locationId: number;

  @Column("nvarchar", { name: "name", nullable: true, length: 50 })
  @Field({ nullable: true })
  name: string | null;

  @Column("nvarchar", { name: "shortname", nullable: true, length: 50 })
  @Field({ nullable: true })
  shortname: string | null;

  @Column("nvarchar", { name: "whgroup", nullable: true, length: 50 })
  @Field({ nullable: true })
  whgroup: string | null;

  @Column("int", { name: "atlaid", nullable: true })
  @Field(() => Int, { nullable: true })
  atlaid: number | null;

  @Column("nvarchar", { name: "atlaname", nullable: true, length: 250 })
  @Field({ nullable: true })
  atlaname: string | null;

  @Column("int", { name: "comid", nullable: true })
  @Field(() => Int, { nullable: true })
  comid: number | null;

   @Field(() => [Coils], { nullable: true })
  @OneToMany(() => Coils, (coil) => coil.loc)
coils: Coils[];

 @Field(() => [UsersLocationAccess], { nullable: true })
  @OneToMany(() => UsersLocationAccess, (ula) => ula.location)
  usersLocationAccess: UsersLocationAccess[];
}
