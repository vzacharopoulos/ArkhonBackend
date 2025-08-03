import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5730", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("TAXFREEVALUE", { schema: "dbo" })
export class Taxfreevalue {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("float", { name: "TFVALUE", nullable: true, precision: 53 })
  tfvalue: number | null;
}
