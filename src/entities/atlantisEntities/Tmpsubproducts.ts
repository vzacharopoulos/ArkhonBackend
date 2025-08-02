import { Column, Entity, Index } from "typeorm";

@Index("TMPSBPRDCTS_IDX_FTR", ["ftrid"], {})
@Index("TMPSBPRDCTS_IDX_ITE", ["finiteid"], {})
@Entity("TMPSUBPRODUCTS", { schema: "dbo" })
export class Tmpsubproducts {
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Column("int", { name: "FINITEID", nullable: true })
  finiteid: number | null;

  @Column("int", { name: "STLID", nullable: true })
  stlid: number | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("int", { name: "ACCID", nullable: true })
  accid: number | null;

  @Column("int", { name: "ANALACCID", nullable: true })
  analaccid: number | null;

  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Column("float", { name: "PRODVALUE", nullable: true, precision: 53 })
  prodvalue: number | null;
}
