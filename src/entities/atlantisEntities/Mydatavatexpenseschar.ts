import { Column, Entity, Index } from "typeorm";

@Index("UNI_18330", ["code"], { unique: true })
@Entity("MYDATAVATEXPENSESCHAR", { schema: "dbo" })
export class Mydatavatexpenseschar {
  @Column("varchar", { primary: true, name: "CODE", length: 20 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 120 })
  descr: string;

  @Column("smallint", { name: "VATDISCOUNT", nullable: true })
  vatdiscount: number | null;

  @Column("varchar", { name: "TRADE", nullable: true, length: 120 })
  trade: string | null;

  @Column("varchar", { name: "VATDESCR", nullable: true, length: 20 })
  vatdescr: string | null;

  @Column("varchar", { name: "INTRACOMMUNITY", nullable: true, length: 20 })
  intracommunity: string | null;

  @Column("varchar", { name: "THIRDCOUNTRY", nullable: true, length: 20 })
  thirdcountry: string | null;

  @Column("varchar", { name: "ASSETS_39A", nullable: true, length: 20 })
  assets_39A: string | null;

  @Column("varchar", { name: "INTRACOMMUNITY_MAT", nullable: true, length: 20 })
  intracommunityMat: string | null;

  @Column("varchar", { name: "THIRDCOUNTRY_MAT", nullable: true, length: 20 })
  thirdcountryMat: string | null;
}
