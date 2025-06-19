import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_prices_new_1", ["prodId"], { unique: true })
@Entity("prices_new", { schema: "dbo" })
export class PricesNew {
  @PrimaryGeneratedColumn({ type: "int", name: "prod_id" })
  prodId: number;

  @Column("varchar", { name: "prod_name", nullable: true })
  prodName: string | null;

  @Column("date", { name: "date", nullable: true })
  date: Date | null;

  @Column("varchar", { name: "freq", nullable: true, length: 50 })
  freq: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 50 })
  type: string | null;

  @Column("varchar", { name: "price_range", nullable: true, length: 50 })
  priceRange: string | null;

  @Column("decimal", {
    name: "mprice",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  mprice: number | null;

  @Column("varchar", { name: "currency", nullable: true, length: 50 })
  currency: string | null;
}
