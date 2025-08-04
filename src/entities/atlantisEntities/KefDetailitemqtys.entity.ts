import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_DETAILITEMQTYS_PK", ["comid", "parid"], { unique: true })
@ObjectType()
@Entity("KEF_DETAILITEMQTYS", { schema: "dbo" })
export class KefDetailitemqtys {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "PARID" })
  parid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "PARCODE", nullable: true, length: 25 })
  parcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BINCODE", nullable: true, length: 25 })
  bincode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "INITQTY1", nullable: true, precision: 53 })
  initqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INITQTY2", nullable: true, precision: 53 })
  initqty2: number | null;
}
