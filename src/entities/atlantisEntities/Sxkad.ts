import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_15230", ["id"], { unique: true })
@Index("UNI_15458", ["code"], { unique: true })
@Entity("SXKAD", { schema: "dbo" })
export class Sxkad {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;
}
