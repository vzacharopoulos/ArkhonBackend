import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5796", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("ITEMGROUP2", { schema: "dbo" })
export class Itemgroup2 {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Column("int", { name: "RELID", nullable: true })
  relid: number | null;

  @Column("int", { name: "TOUCHORDER", nullable: true })
  touchorder: number | null;
}
