import { Field } from "@nestjs/graphql";
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

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 120 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FROMDATE", nullable: true })
  fromdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "TODATE", nullable: true })
  todate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "DOMAINTYPE",
    nullable: true,
    default: () => "0",
  })
  domaintype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", precision: 53 })
  primaryqty: number;

  @Field({ nullable: true })
  @Column("float", { name: "SECONDARYQTY", nullable: true, precision: 53 })
  secondaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "CONVCOEF",
    nullable: true,
    precision: 53,
    default: () => "1",
  })
  convcoef: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF", nullable: true, precision: 53 })
  pccoef: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RELOADTIME", nullable: true, precision: 53 })
  reloadtime: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "RELOADQTY", nullable: true, precision: 53 })
  reloadqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRODTIME", nullable: true, precision: 53 })
  prodtime: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRODTIMEMU", nullable: true, default: () => "0" })
  prodtimemu: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRODTIMESETUP", nullable: true, precision: 53 })
  prodtimesetup: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRODTIMEWAIT", nullable: true, precision: 53 })
  prodtimewait: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PHSGROUPID", nullable: true })
  phsgroupid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GREIDS", nullable: true, length: 255 })
  greids: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF1", nullable: true, precision: 53 })
  pccoef1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF2", nullable: true, precision: 53 })
  pccoef2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF3", nullable: true, precision: 53 })
  pccoef3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF4", nullable: true, precision: 53 })
  pccoef4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PCCOEF5", nullable: true, precision: 53 })
  pccoef5: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Material, (material) => material.specifications)
  @JoinColumn([{ name: "ITEID", referencedColumnName: "id" }])
  ite: Material;

  @Field({ nullable: true })
  @ManyToOne(() => Customer, (customer) => customer.specifications)
  @JoinColumn([{ name: "CUSID", referencedColumnName: "id" }])
  cus: Customer;

  @Field({ nullable: true })
  @ManyToOne(() => Phasegroup, (phasegroup) => phasegroup.specifications)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PHGID", referencedColumnName: "codeid" },
  ])
  phasegroup: Phasegroup;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.specifications)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Specificationlines], { nullable: true })
  @OneToMany(
    () => Specificationlines,
    (specificationlines) => specificationlines.spc
  )
  specificationlines: Specificationlines[];

  @Field(() => [Specificationlines], { nullable: true })
  @OneToMany(
    () => Specificationlines,
    (specificationlines) => specificationlines.relspc
  )
  specificationlines2: Specificationlines[];

  @Field(() => [Specresource], { nullable: true })
  @OneToMany(() => Specresource, (specresource) => specresource.spc)
  specresources: Specresource[];

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.spc)
  storetrades: Storetrade[];

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(() => Storetradelines, (storetradelines) => storetradelines.spc)
  storetradelines: Storetradelines[];


}
