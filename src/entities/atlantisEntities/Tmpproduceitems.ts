import { Column, Entity, Index } from "typeorm";

@Index("TMPPRDCTMS_IDX", ["ftrid", "clevel"], {})
@Entity("TMPPRODUCEITEMS", { schema: "dbo" })
export class Tmpproduceitems {
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("int", { name: "CLEVEL", nullable: true })
  clevel: number | null;

  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Column("int", { name: "ANALACCID", nullable: true })
  analaccid: number | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("float", { name: "OVERHEADVALUE", nullable: true, precision: 53 })
  overheadvalue: number | null;

  @Column("float", { name: "LABORVALUE", nullable: true, precision: 53 })
  laborvalue: number | null;

  @Column("float", { name: "MATVALUE", nullable: true, precision: 53 })
  matvalue: number | null;

  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;
}
