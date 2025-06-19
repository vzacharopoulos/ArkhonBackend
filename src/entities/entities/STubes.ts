import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("STubes", { schema: "dbo" })
export class STubes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "code", nullable: true, length: 50 })
  code: string | null;

  @Column("nchar", { name: "mu", nullable: true, length: 10 })
  mu: string | null;

  @Column("varchar", { name: "steelgrade", nullable: true, length: 3 })
  steelgrade: string | null;

  @Column("int", { name: "fd", nullable: true })
  fd: number | null;

  @Column("int", { name: "xd", nullable: true })
  xd: number | null;

  @Column("int", { name: "yd", nullable: true })
  yd: number | null;

  @Column("varchar", { name: "nomthickness", nullable: true, length: 5 })
  nomthickness: string | null;

  @Column("int", { name: "length", nullable: true })
  length: number | null;

  @Column("nchar", { name: "minstock", nullable: true, length: 10 })
  minstock: string | null;

  @Column("decimal", { name: "price", nullable: true, precision: 5, scale: 2 })
  price: number | null;

  @Column("decimal", {
    name: "discount",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  discount: number | null;

  @Column("int", { name: "isEnabled", nullable: true })
  isEnabled: number | null;

  @Column("timestamp", { name: "up_date", nullable: true })
  upDate: Date | null;
}
