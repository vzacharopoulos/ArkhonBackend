import { Column, Entity } from "typeorm";

@Entity("ColorReference", { schema: "dbo" })
export class ColorReference {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("nvarchar", { name: "color", nullable: true, length: 50 })
  color: string | null;

  @Column("nvarchar", { name: "quality", nullable: true, length: 50 })
  quality: string | null;

  @Column("nvarchar", { name: "reference", nullable: true, length: 50 })
  reference: string | null;

  @Column("nvarchar", { name: "isobaucode", nullable: true, length: 50 })
  isobaucode: string | null;
}
