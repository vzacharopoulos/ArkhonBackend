import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18306", ["iscredit", "codeid", "invoicetype"], { unique: true })
@ObjectType()
@Entity("MYDATAE3SUFFIX", { schema: "dbo" })
export class Mydatae3Suffix {
  @Column("varchar", { primary: true, name: "INVOICETYPE", length: 120 })
  invoicetype: string;

  @Column("smallint", { primary: true, name: "ISCREDIT" })
  iscredit: number;

  @Column("varchar", { primary: true, name: "CODEID", length: 20 })
  codeid: string;

  @Column("varchar", { name: "DESCR", length: 120 })
  descr: string;

  @Column("varchar", { name: "SUFFIX", length: 50 })
  suffix: string;

  @Column("varchar", { name: "INTRACOMMUNITY", nullable: true, length: 50 })
  intracommunity: string | null;

  @Column("varchar", { name: "THIRDCOUNTRY", nullable: true, length: 50 })
  thirdcountry: string | null;

  @Column("varchar", { name: "OTHER", nullable: true, length: 50 })
  other: string | null;

  @Column("varchar", { name: "OTHERCOUNTRY", nullable: true, length: 50 })
  othercountry: string | null;
}
