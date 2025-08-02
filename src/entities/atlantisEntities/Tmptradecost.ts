import { Column, Entity, Index } from "typeorm";

@Index("TMPTRDCST_IDX_ACCID", ["accid"], {})
@Index("TMPTRDCST_IDX_FTR", ["ftrid"], {})
@Index("TMPTRDCST_IDX_ID", ["id"], {})
@Index("TMPTRDCST_IDX_ITE", ["iteid"], {})
@Entity("TMPTRADECOST", { schema: "dbo" })
export class Tmptradecost {
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("int", { name: "SOURCEID", nullable: true })
  sourceid: number | null;

  @Column("float", { name: "CSTVALUE", nullable: true, precision: 53 })
  cstvalue: number | null;

  @Column("int", { name: "SPCID", nullable: true })
  spcid: number | null;

  @Column("smallint", { name: "RESKIND", nullable: true })
  reskind: number | null;

  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("int", { name: "ID", nullable: true })
  id: number | null;

  @Column("smallint", { name: "INSMODE", nullable: true })
  insmode: number | null;

  @Column("decimal", {
    name: "CSTAMOUNT",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  cstamount: number | null;
}
