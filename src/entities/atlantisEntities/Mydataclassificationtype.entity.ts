import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18298", ["codeid"], { unique: true })
@Index("UNI_18300", ["codeiddescr", "iscredit"], { unique: true })
@ObjectType()
@Entity("MYDATACLASSIFICATIONTYPE", { schema: "dbo" })
export class Mydataclassificationtype {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "CODEIDDESCR", unique: true, length: 255 })
  codeiddescr: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("smallint", { name: "ISCREDIT", unique: true })
  iscredit: number;

  @Column("smallint", { name: "ISPERIODICAL" })
  isperiodical: number;
}
