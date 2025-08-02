import { Column, Entity, Index } from "typeorm";

@Index("TMPCOSTACC_IDX", ["iteid"], {})
@Entity("TMPCOSTACC", { schema: "dbo" })
export class Tmpcostacc {
  @Column("int", { name: "ITEID" })
  iteid: number;

  @Column("float", { name: "IMPORTVALUE", nullable: true, precision: 53 })
  importvalue: number | null;

  @Column("float", { name: "PRODUCTIONVALUE", nullable: true, precision: 53 })
  productionvalue: number | null;

  @Column("float", { name: "RESTQTY", nullable: true, precision: 53 })
  restqty: number | null;

  @Column("float", { name: "EXPORTPRQTY", nullable: true, precision: 53 })
  exportprqty: number | null;

  @Column("float", { name: "COSTVALUE", nullable: true, precision: 53 })
  costvalue: number | null;

  @Column("float", { name: "COSTACC", nullable: true, precision: 53 })
  costacc: number | null;

  @Column("float", { name: "PRODUCTIONQTY", nullable: true, precision: 53 })
  productionqty: number | null;

  @Column("float", { name: "STDCOST", nullable: true, precision: 53 })
  stdcost: number | null;
}
