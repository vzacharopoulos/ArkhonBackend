import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18290", ["codeid"], { unique: true })
@Index("UNI_18292", ["codeiddescr"], { unique: true })
@ObjectType()
@Entity("MYDATACLASSIFICATIONCAT", { schema: "dbo" })
export class Mydataclassificationcat {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "CODEIDDESCR", unique: true, length: 255 })
  codeiddescr: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("smallint", { name: "ISCREDIT" })
  iscredit: number;
}
