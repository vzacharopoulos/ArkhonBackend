import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5730", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("TAXFREEVALUE", { schema: "dbo" })
export class Taxfreevalue {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "TFVALUE", nullable: true, precision: 53 })
  tfvalue: number | null;
}
