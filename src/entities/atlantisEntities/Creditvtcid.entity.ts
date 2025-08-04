import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_6066", ["id"], { unique: true })
@ObjectType()
@Entity("CREDITVTCID", { schema: "dbo" })
export class Creditvtcid {
  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID" })
  vtcid: number;

  @Field({ nullable: true })
  @Column("int", { name: "VCTID" })
  vctid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DTYPE", default: () => "0" })
  dtype: number;

  @Field({ nullable: true })
  @Column("int", { name: "ITEMTYPE", default: () => "0" })
  itemtype: number;

  @Field({ nullable: true })
  @Column("int", { name: "EXTRAID", nullable: true })
  extraid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ONLYSALES", default: () => "0" })
  onlysales: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;
}
