import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_3810_1", ["iteid", "stoid", "bincode", "parid"], { unique: true })
@ObjectType()
@Entity("DETAILITEMQTYS", { schema: "dbo" })
export class Detailitemqtys {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Column("varchar", {
    primary: true,
    name: "BINCODE",
    length: 25,
    default: () => "''",
  })
  bincode: string;

  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("int", { primary: true, name: "PARID", default: () => "0" })
  parid: number;

  @Column("float", {
    name: "INITQTY1",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  initqty1: number | null;

  @Column("float", {
    name: "INITQTY2",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  initqty2: number | null;

  @ManyToOne(() => Material, (material) => material.detailitemqtys)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
