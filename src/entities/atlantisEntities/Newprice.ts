import { Column, Entity } from "typeorm";

@Entity("NEWPRICE", { schema: "dbo" })
export class Newprice {
  @Column("nvarchar", { name: "CODE", nullable: true, length: 255 })
  code: string | null;

  @Column("nvarchar", { name: "DESCRIPTION", nullable: true, length: 255 })
  description: string | null;

  @Column("float", { name: "WHSPRICE", nullable: true, precision: 53 })
  whsprice: number | null;

  @Column("float", { name: "RTLPRICE", nullable: true, precision: 53 })
  rtlprice: number | null;
}
