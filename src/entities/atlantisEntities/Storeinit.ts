import { Column, Entity } from "typeorm";

@Entity("STOREINIT", { schema: "dbo" })
export class Storeinit {
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("float", { name: "IMPQTY1", nullable: true, precision: 53 })
  impqty1: number | null;

  @Column("float", { name: "IMPQTY2", nullable: true, precision: 53 })
  impqty2: number | null;

  @Column("float", { name: "IMPVALUE", nullable: true, precision: 53 })
  impvalue: number | null;
}
