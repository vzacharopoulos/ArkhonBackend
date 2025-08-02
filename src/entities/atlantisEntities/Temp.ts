import { Column, Entity } from "typeorm";

@Entity("temp", { schema: "dbo" })
export class Temp {
  @Column("nchar", { name: "temp", nullable: true, length: 50 })
  temp: string | null;

  @Column("decimal", { name: "price", nullable: true, precision: 18, scale: 2 })
  price: number | null;
}
