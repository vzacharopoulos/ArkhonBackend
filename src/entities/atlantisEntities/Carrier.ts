import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Country } from "./Country";
import { Company } from "./Company";
import { Customer } from "./Customer";
import { Storetrade } from "./Storetrade";

@Index("UNI_5322", ["comid", "codeid"], { unique: true })
@Entity("CARRIER", { schema: "dbo" })
export class Carrier {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "PHONE", nullable: true, length: 20 })
  phone: string | null;

  @Column("varchar", { name: "ADDRESS", nullable: true, length: 30 })
  address: string | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("varchar", { name: "COMMENTS2", nullable: true, length: 255 })
  comments2: string | null;

  @Column("varchar", { name: "COMMENTS3", nullable: true, length: 255 })
  comments3: string | null;

  @Column("smallint", { name: "ISCOURIER", default: () => "(1)" })
  iscourier: number;

  @Column("varchar", { name: "AFTERSALESAPIKEY", nullable: true, length: 100 })
  aftersalesapikey: string | null;

  @Column("varchar", { name: "AREA", nullable: true, length: 50 })
  area: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Column("varchar", { name: "CITY", nullable: true, length: 50 })
  city: string | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 25 })
  afm: string | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 255 })
  email: string | null;

  @Column("smallint", {
    name: "AFMSTATE",
    nullable: true,
    default: () => "(0)",
  })
  afmstate: number | null;

  @Column("datetime", { name: "AFMSTATECHECKDATE", nullable: true })
  afmstatecheckdate: Date | null;

  @ManyToOne(() => Country, (country) => country.carriers)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;

 
  @OneToMany(() => Customer, (customer) => customer.carrier2)
  customers: Customer[];


  @OneToMany(() => Storetrade, (storetrade) => storetrade.carrier)
  storetrades: Storetrade[];

}
