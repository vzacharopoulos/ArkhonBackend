import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_PARTITION_PK", ["comid", "recId"], { unique: true })
@ObjectType()
@Entity("KEF_PARTITION", { schema: "dbo" })
export class KefPartition {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "INPUTDATE", nullable: true })
  inputdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "INITQTY1", nullable: true, precision: 53 })
  initqty1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "INITQTY2", nullable: true, precision: 53 })
  initqty2: number | null;
}
