import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_prices", ["id"], { unique: true })
@Entity("prices", { schema: "dbo" })
export class Prices {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("date", { name: "date", nullable: true })
  date: Date | null;

  @Column("float", { name: "price1", nullable: true, precision: 53 })
  price1: number | null;

  @Column("float", { name: "price2", nullable: true, precision: 53 })
  price2: number | null;

  @Column("float", { name: "price3", nullable: true, precision: 53 })
  price3: number | null;

  @Column("float", { name: "price4", nullable: true, precision: 53 })
  price4: number | null;
}
