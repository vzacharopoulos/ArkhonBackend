import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SalesManTarget", ["id"], { unique: true })
@Entity("SalesManTarget", { schema: "dbo" })
export class SalesManTarget {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "year", nullable: true })
  year: number | null;

  @Column("int", { name: "customerID", nullable: true })
  customerId: number | null;

  @Column("int", { name: "tubes_target", nullable: true })
  tubesTarget: number | null;

  @Column("int", { name: "panel_target", nullable: true })
  panelTarget: number | null;

  @Column("int", { name: "coil_target", nullable: true })
  coilTarget: number | null;

  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Column("int", { name: "tubesHRCPER", nullable: true })
  tubesHrcper: number | null;

  @Column("int", { name: "tubesHDGPER", nullable: true })
  tubesHdgper: number | null;

  @Column("int", { name: "tubesCRCPER", nullable: true })
  tubesCrcper: number | null;
}
