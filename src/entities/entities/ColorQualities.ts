import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_ColorQualities", ["id"], { unique: true })
@Entity("ColorQualities", { schema: "dbo" })
export class ColorQualities {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "supplier", nullable: true, length: 50 })
  supplier: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar", { name: "class", nullable: true, length: 50 })
  class: string | null;
}
