import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Settings", ["id"], { unique: true })
@Entity("Settings", { schema: "dbo" })
export class Settings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "setname", nullable: true, length: 50 })
  setname: string | null;

  @Column("nchar", { name: "value", nullable: true, length: 10 })
  value: string | null;

  @Column("nvarchar", { name: "description", nullable: true })
  description: string | null;
}
