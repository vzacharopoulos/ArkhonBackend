import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Comtradelines } from "./Comtradelines.entity";
import { Salesparams } from "./Salesparams.entity";
import { Varcomtemplines } from "./Varcomtemplines.entity";
import { Company } from "./Company.entity";
import { Vatcategory } from "./Vatcategory.entity";

@Index("UNI_5124", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("VARCOMTRADES", { schema: "dbo" })
export class Varcomtrades {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITUPD" })
  debitupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREDITUPD" })
  creditupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "GROUPVALUE" })
  groupvalue: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "TURNOVERUPD" })
  turnoverupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "SUBJECTTOVAT", default: () => "1" })
  subjecttovat: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KEPYOUPD" })
  kepyoupd: number;

  @Field({ nullable: true })
  @Column("int", { name: "VATVCTID", nullable: true })
  vatvctid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SOURCETYPE", default: () => "0" })
  sourcetype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INTRMODE", default: () => "(0)" })
  intrmode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXKIND", nullable: true })
  taxkind: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "KADID", nullable: true })
  kadid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACATID", nullable: true })
  mydatacatid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "VATDEDUCTION",
    nullable: true,
    default: () => "(0)",
  })
  vatdeduction: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ACCOMMODATIONFEE", default: () => "(0)" })
  accommodationfee: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field(() => [Comtradelines], { nullable: true })
  @OneToMany(() => Comtradelines, (comtradelines) => comtradelines.varcomtrades)
  comtradelines: Comtradelines[];

  @Field(() => [Salesparams], { nullable: true })
  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades)
  salesparams: Salesparams[];

  @Field(() => [Salesparams], { nullable: true })
  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades2)
  salesparams2: Salesparams[];

  @Field(() => [Salesparams], { nullable: true })
  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades3)
  salesparams3: Salesparams[];

  @Field(() => [Salesparams], { nullable: true })
  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades4)
  salesparams4: Salesparams[];

  @Field(() => [Salesparams], { nullable: true })
  @OneToMany(() => Salesparams, (salesparams) => salesparams.varcomtrades5)
  salesparams5: Salesparams[];

  @Field(() => [Varcomtemplines], { nullable: true })
  @OneToMany(
    () => Varcomtemplines,
    (varcomtemplines) => varcomtemplines.varcomtrades
  )
  varcomtemplines: Varcomtemplines[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.varcomtrades)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field({ nullable: true })
  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.varcomtrades)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;
}
