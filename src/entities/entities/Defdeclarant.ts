import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Defdeclarant", ["id"], { unique: true })
@Entity("Defdeclarant", { schema: "dbo" })
export class Defdeclarant {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 20 })
  name: string | null;
}
