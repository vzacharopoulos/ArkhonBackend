import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5834", ["comid", "codeid", "source"], { unique: true })
@ObjectType()
@Entity("JUSTIFICATION", { schema: "dbo" })
export class Justification {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("smallint", { primary: true, name: "SOURCE" })
  source: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;
}
