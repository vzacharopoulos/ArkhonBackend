import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_5850", ["id"], { unique: true })
@ObjectType()
@Entity("KEPYO", { schema: "dbo" })
export class Kepyo {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "RECTYPE" })
  rectype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INFO", length: 255 })
  info: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISNEG" })
  isneg: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEPYOSTATUS", nullable: true })
  kepyostatus: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "KEPYOVAL", nullable: true, precision: 53 })
  kepyoval: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "KEPYOQTY", nullable: true })
  kepyoqty: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "WRONGAFM", nullable: true, default: () => "0" })
  wrongafm: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURID", nullable: true })
  curid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXKEPYOVAL", nullable: true, precision: 53 })
  exkepyoval: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EXKEPYOQTY", nullable: true })
  exkepyoqty: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "AKIND", default: () => "0" })
  akind: number;

  @Field({ nullable: true })
  @Column("float", {
    name: "FUELQTY",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  fuelqty: number | null;
}
