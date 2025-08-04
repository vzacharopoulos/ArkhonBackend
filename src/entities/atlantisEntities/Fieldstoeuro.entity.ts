import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("UNI_6180", ["id"], { unique: true })
@Index("UNI_6310", ["tblname", "fldname"], { unique: true })
@ObjectType()
@Entity("FIELDSTOEURO", { schema: "dbo" })
export class Fieldstoeuro {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TBLNAME", unique: true, length: 50 })
  tblname: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDNAME", unique: true, length: 50 })
  fldname: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "EXTRAWHERE", nullable: true })
  extrawhere: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISREADONLY", default: () => "0" })
  isreadonly: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "STATUS", default: () => "0" })
  status: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEFAULTSTATUS", default: () => "0" })
  defaultstatus: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DECIMALS", default: () => "2" })
  decimals: number;


}
