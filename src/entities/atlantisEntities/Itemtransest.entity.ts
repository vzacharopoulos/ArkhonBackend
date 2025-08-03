import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material.entity";

@Index("UNI_5352", ["id"], { unique: true })
@Index("UNIX_1033", ["ftrid"], {})
@Index("UNIX_1034", ["iteid", "trndate"], {})
@Index("UNIX_1060", ["perid", "source"], {})
@Index("UNIX_1109", ["stlid"], {})
@ObjectType()
@Entity("ITEMTRANSEST", { schema: "dbo" })
export class Itemtransest {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "BRAID" })
  braid: number;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("datetime", { name: "TRNDATE", nullable: true })
  trndate: Date | null;

  @Column("float", { name: "PRICE", nullable: true, precision: 53 })
  price: number | null;

  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("int", { name: "ITEID" })
  iteid: number;

  @Column("smallint", { name: "PROSPMODE", nullable: true })
  prospmode: number | null;

  @Column("smallint", { name: "TIEDMODE", nullable: true })
  tiedmode: number | null;

  @Column("int", { name: "MUID", nullable: true })
  muid: number | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @Column("int", { name: "STLID", nullable: true })
  stlid: number | null;

  @Column("datetime", { name: "ESTDATE", nullable: true })
  estdate: Date | null;

  @Column("int", { name: "PARID", nullable: true })
  parid: number | null;

  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @ManyToOne(() => Material, (material) => material.itemtransests)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;
}
