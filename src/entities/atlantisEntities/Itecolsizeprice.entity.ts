import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_6260_1", ["iteid", "pricetype", "colorcode", "supid"], {
  unique: true,
})
@ObjectType()
@Entity("ITECOLSIZEPRICE", { schema: "dbo" })
export class Itecolsizeprice {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("smallint", { primary: true, name: "PRICETYPE", default: () => "0" })
  pricetype: number;

  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("float", { name: "PRICE1", nullable: true, precision: 53 })
  price1: number | null;

  @Column("float", { name: "PRICE2", nullable: true, precision: 53 })
  price2: number | null;

  @Column("float", { name: "PRICE3", nullable: true, precision: 53 })
  price3: number | null;

  @Column("float", { name: "PRICE4", nullable: true, precision: 53 })
  price4: number | null;

  @Column("float", { name: "PRICE5", nullable: true, precision: 53 })
  price5: number | null;

  @Column("float", { name: "PRICE6", nullable: true, precision: 53 })
  price6: number | null;

  @Column("float", { name: "PRICE7", nullable: true, precision: 53 })
  price7: number | null;

  @Column("float", { name: "PRICE8", nullable: true, precision: 53 })
  price8: number | null;

  @Column("float", { name: "PRICE9", nullable: true, precision: 53 })
  price9: number | null;

  @Column("float", { name: "PRICE10", nullable: true, precision: 53 })
  price10: number | null;

  @Column("float", { name: "PRICE11", nullable: true, precision: 53 })
  price11: number | null;

  @Column("float", { name: "PRICE12", nullable: true, precision: 53 })
  price12: number | null;

  @Column("float", { name: "PRICE13", nullable: true, precision: 53 })
  price13: number | null;

  @Column("float", { name: "PRICE14", nullable: true, precision: 53 })
  price14: number | null;

  @Column("float", { name: "PRICE15", nullable: true, precision: 53 })
  price15: number | null;

  @Column("float", { name: "PRICE16", nullable: true, precision: 53 })
  price16: number | null;

  @Column("float", { name: "PRICE17", nullable: true, precision: 53 })
  price17: number | null;

  @Column("float", { name: "PRICE18", nullable: true, precision: 53 })
  price18: number | null;

  @Column("float", { name: "PRICE19", nullable: true, precision: 53 })
  price19: number | null;

  @Column("float", { name: "PRICE20", nullable: true, precision: 53 })
  price20: number | null;

  @Column("int", { primary: true, name: "SUPID", default: () => "0" })
  supid: number;

  @ManyToOne(() => Material, (material) => material.itecolsizeprices)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
