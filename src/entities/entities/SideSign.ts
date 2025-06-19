import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SideSign", ["id"], { unique: true })
@Entity("SideSign", { schema: "dbo" })
export class SideSign {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "code", nullable: true, length: 2 })
  code: string | null;

  @Column("nchar", { name: "name", nullable: true, length: 20 })
  name: string | null;
}
