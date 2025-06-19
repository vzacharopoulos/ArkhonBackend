import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("printers", { schema: "dbo" })
export class Printers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Column("text", { name: "ip", nullable: true })
  ip: string | null;

  @Column("nchar", { name: "protocol", nullable: true, length: 10 })
  protocol: string | null;
}
