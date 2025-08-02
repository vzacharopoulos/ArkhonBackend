import { Column, Entity, Index, OneToMany } from "typeorm";
import { Branch } from "./Branch";
import { Company } from "./Company";
import { Customer } from "./Customer";
import { Supplier } from "./Supplier";
import { Sxaccountant } from "./Sxaccountant";

@Index("UNI_5010", ["codeid"], { unique: true })
@Entity("DOY", { schema: "dbo" })
export class Doy {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "CODE", nullable: true, length: 10 })
  code: string | null;

  @Column("varchar", { name: "DESCR", length: 100 })
  descr: string;

  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Column("varchar", { name: "DISTRICT", nullable: true, length: 30 })
  district: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Column("varchar", { name: "CONTACT", nullable: true, length: 30 })
  contact: string | null;

  @Column("int", { name: "NEWDOYID", nullable: true })
  newdoyid: number | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @OneToMany(() => Branch, (branch) => branch.doy)
  branches: Branch[];

  @OneToMany(() => Company, (company) => company.doy)
  companies: Company[];

  @OneToMany(() => Customer, (customer) => customer.doy)
  customers: Customer[];

  @OneToMany(() => Supplier, (supplier) => supplier.doy)
  suppliers: Supplier[];

  @OneToMany(() => Sxaccountant, (sxaccountant) => sxaccountant.doy)
  sxaccountants: Sxaccountant[];

  @OneToMany(() => Sxaccountant, (sxaccountant) => sxaccountant.startdoy)
  sxaccountants2: Sxaccountant[];

}
