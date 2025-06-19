import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("TPOrdersInstr", { schema: "dbo" })
export class TpOrdersInstr {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "tporderid", nullable: true, length: 50 })
  tporderid: string | null;

  @Column("int", { name: "pieces", nullable: true })
  pieces: number | null;

  @Column("int", { name: "length", nullable: true })
  length: number | null;

  @Column("int", { name: "piecesperpackage", nullable: true })
  piecesperpackage: number | null;

  @Column("nvarchar", { name: "packaging", nullable: true, length: 50 })
  packaging: string | null;

  @Column("nvarchar", { name: "comment", nullable: true, length: 50 })
  comment: string | null;

  @Column("nvarchar", { name: "ordercomment", nullable: true, length: 50 })
  ordercomment: string | null;
}
