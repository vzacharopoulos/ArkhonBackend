import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Coil_coathick", ["code"], { unique: true })
@Entity("Coil_Coathick", { schema: "dbo" })
export class CoilCoathick {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Column("nchar", { name: "description", nullable: true, length: 10 })
  description: string | null;
}
