import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("UNI_5384", ["id"], { unique: true })
@ObjectType()
@Entity("CUSTOM", { schema: "dbo" })
export class Custom {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINKIND" })
  domainkind: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DATAKIND" })
  datakind: number;

  @Field({ nullable: true })
  @Column("int", { name: "USERID", nullable: true })
  userid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GROUPID", nullable: true })
  groupid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DATANAME", nullable: true, length: 100 })
  dataname: string | null;



  @Field({ nullable: true })
  @Column("int", { name: "EXTRADATAKIND", nullable: true })
  extradatakind: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DATADESCR", nullable: true, length: 200 })
  datadescr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "EXTRADOMAINKIND", nullable: true })
  extradomainkind: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSTOMID", nullable: true })
  customid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OBJECTNAME", nullable: true, length: 100 })
  objectname: string | null;


}
