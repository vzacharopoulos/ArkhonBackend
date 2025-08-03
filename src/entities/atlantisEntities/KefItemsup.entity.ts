import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ITEMSUP_PK", ["comid", "itecode", "supcode"], { unique: true })
@ObjectType()
@Entity("KEF_ITEMSUP", { schema: "dbo" })
export class KefItemsup {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { primary: true, name: "ITECODE", length: 25 })
  itecode: string;

  @Column("varchar", { primary: true, name: "SUPCODE", length: 25 })
  supcode: string;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("int", { name: "SUPID", nullable: true })
  supid: number | null;

  @Column("varchar", { name: "SUPITECODE", nullable: true, length: 25 })
  supitecode: string | null;

  @Column("datetime", { name: "CODEDATE", nullable: true })
  codedate: Date | null;

  @Column("float", { name: "AGGREEDPRICE", nullable: true, precision: 53 })
  aggreedprice: number | null;

  @Column("float", { name: "DISCOUNT1", nullable: true, precision: 53 })
  discount1: number | null;
}
