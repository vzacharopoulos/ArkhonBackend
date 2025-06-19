import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Paneltype", ["code"], { unique: true })
@Entity("Paneltype", { schema: "dbo" })
export class Paneltype {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("nchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("nchar", { name: "description", nullable: true, length: 50 })
  description: string | null;

  @Column("nvarchar", { name: "widthin", nullable: true, length: 10 })
  widthin: string | null;

  @Column("nvarchar", { name: "widthout", nullable: true, length: 10 })
  widthout: string | null;

  @Column("nvarchar", { name: "header", nullable: true })
  header: string | null;
}
