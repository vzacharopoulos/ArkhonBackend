import { Column, Entity } from "typeorm";

@Entity("Panel_Thickness", { schema: "dbo" })
export class PanelThickness {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;

  @Column("nchar", { name: "code", nullable: true, length: 3 })
  code: string | null;

  @Column("nchar", { name: "thickness", nullable: true, length: 3 })
  thickness: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "SKY3", nullable: true })
  sky3: number | null;

  @Column("int", { name: "SKY5", nullable: true })
  sky5: number | null;

  @Column("int", { name: "HORIZON", nullable: true })
  horizon: number | null;

  @Column("int", { name: "FRIGO", nullable: true })
  frigo: number | null;

  @Column("int", { name: "ROMAN", nullable: true })
  roman: number | null;

  @Column("int", { name: "SKY3_PACKAGE", nullable: true })
  sky3Package: number | null;

  @Column("int", { name: "HORIZON_PACKAGE", nullable: true })
  horizonPackage: number | null;

  @Column("int", { name: "FRIGO_PACKAGE", nullable: true })
  frigoPackage: number | null;

  @Column("int", { name: "ROMAN_PACKAGE", nullable: true })
  romanPackage: number | null;

  @Column("nchar", { name: "SKY5_PACKAGE", nullable: true, length: 10 })
  sky5Package: string | null;
}
