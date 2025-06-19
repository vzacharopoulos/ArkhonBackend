import { Column, Entity } from "typeorm";

@Entity("Price_Groups", { schema: "dbo" })
export class PriceGroups {
  @Column("nvarchar", { name: "TYPE", nullable: true, length: 10 })
  type: string | null;

  @Column("nchar", { name: "STEEL", nullable: true, length: 10 })
  steel: string | null;

  @Column("nchar", { name: "THICKCLASS", nullable: true, length: 10 })
  thickclass: string | null;

  @Column("nchar", { name: "LENGTH", nullable: true, length: 10 })
  length: string | null;

  @Column("nchar", { name: "ATLACODE", nullable: true, length: 10 })
  atlacode: string | null;

  @Column("nchar", { name: "PRICE_GROUP", nullable: true, length: 150 })
  priceGroup: string | null;

  @Column("nchar", { name: "DISCOUNT_GROUP", nullable: true, length: 150 })
  discountGroup: string | null;

  @Column("decimal", { name: "PRICE", nullable: true, precision: 8, scale: 3 })
  price: number | null;

  @Column("decimal", {
    name: "DISCOUNT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  discount: number | null;

  @Column("int", { name: "isException", nullable: true })
  isException: number | null;
}
