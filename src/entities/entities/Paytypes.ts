import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_paymethods", ["id"], { unique: true })
@Entity("paytypes", { schema: "dbo" })
export class Paytypes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("nvarchar", { name: "description", nullable: true, length: 50 })
  description: string | null;
}
