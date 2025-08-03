import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./Account.entity";
import { Asset } from "./Asset.entity";
import { Comtradelines } from "./Comtradelines.entity";
import { Depricedasset } from "./Depricedasset.entity";
import { Material } from "./Material.entity";
import { Spsurcharges } from "./Spsurcharges.entity";

import { Varcomtrades } from "./Varcomtrades.entity";
import { Vatgl } from "./Vatgl.entity";
import { Vatstatus } from "./Vatstatus.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_718", ["codeid"], { unique: true })
@Index("UNI_729", ["id"], { unique: true })
@Entity("VATCATEGORY", { schema: "dbo" })
export class Vatcategory {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "VATDESCR", nullable: true, length: 30 })
  vatdescr: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("float", { name: "PERCENTAGE", precision: 53 })
  percentage: number;

  @Column("smallint", { name: "VATKIND", default: () => "1" })
  vatkind: number;

  @Column("smallint", { name: "PWIDTH", nullable: true })
  pwidth: number | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("smallint", { name: "CATID", default: () => "(0)" })
  catid: number;

  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Column("smallint", { name: "ISFORABROADSALES", default: () => "(0)" })
  isforabroadsales: number;

  @OneToMany(() => Account, (account) => account.vtc)
  accounts: Account[];

  @OneToMany(() => Asset, (asset) => asset.vtc)
  assets: Asset[];

  @OneToMany(() => Comtradelines, (comtradelines) => comtradelines.vtc)
  comtradelines: Comtradelines[];

  @OneToMany(() => Depricedasset, (depricedasset) => depricedasset.vtc)
  depricedassets: Depricedasset[];

  @OneToMany(() => Material, (material) => material.vtc)
  materials: Material[];

  @OneToMany(() => Spsurcharges, (spsurcharges) => spsurcharges.vtc)
  spsurcharges: Spsurcharges[];

  
  @OneToMany(() => Varcomtrades, (varcomtrades) => varcomtrades.vtc)
  varcomtrades: Varcomtrades[];

  @OneToMany(() => Vatgl, (vatgl) => vatgl.link)
  vatgls: Vatgl[];

  @OneToMany(() => Vatstatus, (vatstatus) => vatstatus.vts)
  vatstatuses: Vatstatus[];

  @OneToOne(() => Vatstatus, (vatstatus) => vatstatus.vtn)
  vatstatus: Vatstatus;
}
