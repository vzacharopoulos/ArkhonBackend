import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Coating", ["code"], { unique: true })
@Entity("Coil_Coating", { schema: "dbo" })
export class CoilCoating {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Column("nchar", { name: "description", nullable: true, length: 20 })
  description: string | null;
}
