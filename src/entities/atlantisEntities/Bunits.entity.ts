import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";


import { Customer } from "./Customer.entity";

import { Storetradelines } from "./Storetradelines.entity";

@Index("UNI_5810", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("BUNITS", { schema: "dbo" })
export class Bunits {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "STRORDER", nullable: true, length: 30 })
  strorder: string | null;

  @Column("int", { name: "BUSID", nullable: true })
  busid: number | null;

  @Column("varchar", { name: "SHORTCUT", nullable: true, length: 15 })
  shortcut: string | null;

  @Column("varchar", { name: "PURCHASEWARNING", nullable: true, length: 255 })
  purchasewarning: string | null;

  @Column("varchar", { name: "SALESWARNING", nullable: true, length: 255 })
  saleswarning: string | null;

  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  
  @OneToMany(() => Customer, (customer) => customer.bunits)
  customers: Customer[];


  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.bunits)
  storetradelines: Storetradelines[];

  @OneToMany(
    () => Storetradelines,
    (storetradelines) => storetradelines.bunits2
  )
  storetradelines2: Storetradelines[];
}
