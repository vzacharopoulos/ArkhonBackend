import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("UNIX_1066", ["ftrid"], {})
@Index("UNIX_1067", ["iteid"], {})
@Index("UNIX_1102", ["ftrid", "iteid"], {})
@ObjectType()
@Entity("PRODCOST", { schema: "dbo" })
export class Prodcost {
  @PrimaryColumn("int", { name: "FTRID", nullable: false })
  ftrid: number | null;

  @Column("int", { name: "ITEID" })
  iteid: number;

  @Column("int", { name: "SPCID", nullable: true })
  spcid: number | null;

  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Column("datetime", { name: "FTRDATE", nullable: true })
  ftrdate: Date | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Column("float", { name: "SUMPCCOEF", nullable: true, precision: 53 })
  sumpccoef: number | null;

  @Column("smallint", { name: "PRODTYPE", nullable: true })
  prodtype: number | null;
}
