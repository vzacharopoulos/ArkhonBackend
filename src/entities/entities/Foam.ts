import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Foam", ["code"], { unique: true })
@Entity("Foam", { schema: "dbo" })
export class Foam {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Column("nvarchar", { name: "description", nullable: true, length: 50 })
  description: string | null;
}
