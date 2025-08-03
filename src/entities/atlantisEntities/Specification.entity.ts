import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material.entity";
import { Customer } from "./Customer.entity";
import { Phasegroup } from "./Phasegroup.entity";
import { Company } from "./Company.entity";
import { Specificationlines } from "./Specificationlines.entity";
import { Specresource } from "./Specresource.entity";
import { Storetrade } from "./Storetrade.entity";
import { Storetradelines } from "./Storetradelines.entity";

@Index("UNI_5530", ["id"], { unique: true })
@Index("UNI_5534", ["comid", "code"], { unique: true })
@Index("UNIX_1070", ["iteid"], {})
@ObjectType()
@Entity("SPECIFICATION", { schema: "dbo" })
export class Specification {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 120 })
  descr: string | null;

  @Column("datetime", { name: "FROMDATE", nullable: true })
  fromdate: Date | null;

  @Column("datetime", { name: "TODATE", nullable: true })
  todate: Date | null;

  @Column("smallint", {
    name: "DOMAINTYPE",
    nullable: true,
    default: () => "0",
  })
  domaintype: number | null;

  @Column("int", { name: "ITEID" })
  iteid: number;

  @Column("float", { name: "PRIMARYQTY", precision: 53 })
  primaryqty: number;

  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("float", {
    name: "CONVCOEF",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  convcoef: number | null;

  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("float", { name: "RELOADTIME", nullable: true, precision: 53 })
  reloadtime: number | null;

  @Column("float", { name: "RELOADQTY", nullable: true, precision: 53 })
  reloadqty: number | null;

  @Column("float", { name: "PRODTIME", nullable: true, precision: 53 })
  prodtime: number | null;

  @Column("int", { name: "PRODTIMEMU", nullable: true, default: () => "0" })
  prodtimemu: number | null;

  @Column("float", { name: "PRODTIMESETUP", nullable: true, precision: 53 })
  prodtimesetup: number | null;

  @Column("float", { name: "PRODTIMEWAIT", nullable: true, precision: 53 })
  prodtimewait: number | null;

  @Column("int", { name: "PHSGROUPID", nullable: true })
  phsgroupid: number | null;

  @Column("varchar", { name: "GREIDS", nullable: true, length: 255 })
  greids: string | null;

  @Column("float", { name: "PCCOEF1", nullable: true, precision: 53 })
  pccoef1: number | null;

  @Column("float", { name: "PCCOEF2", nullable: true, precision: 53 })
  pccoef2: number | null;

  @Column("float", { name: "PCCOEF3", nullable: true, precision: 53 })
  pccoef3: number | null;

  @Column("float", { name: "PCCOEF4", nullable: true, precision: 53 })
  pccoef4: number | null;

  @Column("float", { name: "PCCOEF5", nullable: true, precision: 53 })
  pccoef5: number | null;

  @ManyToOne(() => Material, (material) => material.specifications)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @ManyToOne(() => Customer, (customer) => customer.specifications)
  @JoinColumn([{ name: "CUSID", referencedColumnName: "id" }])
  cus: Customer;

  @ManyToOne(() => Phasegroup, (phasegroup) => phasegroup.specifications)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PHGID", referencedColumnName: "codeid" },
  ])
  phasegroup: Phasegroup;

  @ManyToOne(() => Company, (company) => company.specifications)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(
    () => Specificationlines,
    (specificationlines) => specificationlines.spc
  )
  specificationlines: Specificationlines[];

  @OneToMany(
    () => Specificationlines,
    (specificationlines) => specificationlines.relspc
  )
  specificationlines2: Specificationlines[];

  @OneToMany(() => Specresource, (specresource) => specresource.spc)
  specresources: Specresource[];

  @OneToMany(() => Storetrade, (storetrade) => storetrade.spc)
  storetrades: Storetrade[];

  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.spc)
  storetradelines: Storetradelines[];


}
