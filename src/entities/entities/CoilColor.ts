import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Color", ["code"], { unique: true })
@Entity("Coil_Color", { schema: "dbo" })
export class CoilColor {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("nchar", { name: "name", nullable: true, length: 40 })
  name: string | null;

  @Column("nchar", { name: "description", nullable: true, length: 40 })
  description: string | null;

  @Column("nvarchar", { name: "hexcode", nullable: true, length: 50 })
  hexcode: string | null;

  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Column("int", { name: "groupid", nullable: true })
  groupid: number | null;

  @Column("int", { name: "isActive", nullable: true })
  isActive: number | null;

  @Column("int", { name: "isPVC", nullable: true })
  isPvc: number | null;
}
