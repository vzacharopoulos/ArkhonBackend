import { Column, Entity, Index } from "typeorm";

@Index("PK_Coil_Thickness", ["code"], { unique: true })
@Entity("Coil_Thickness", { schema: "dbo" })
export class CoilThickness {
  @Column("nchar", { name: "id", nullable: true, length: 10 })
  id: string | null;

  @Column("nchar", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("real", { name: "value", nullable: true, precision: 24 })
  value: number | null;

  @Column("real", { name: "dvalue", nullable: true, precision: 24 })
  dvalue: number | null;
}
