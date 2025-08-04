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
import { Fincustdoctype } from "./Fincustdoctype.entity";
import { Finstoredoctype } from "./Finstoredoctype.entity";
import { Finsupdoctype } from "./Finsupdoctype.entity";
import { Itemtrans } from "./Itemtrans.entity";
import { Company } from "./Company.entity";

@Index("UNI_5254", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("MATTRNTYPE", { schema: "dbo" })
export class Mattrntype {
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
  @Column("smallint", { name: "UPDMODE", nullable: true })
  updmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INPUTQUANTMODE", nullable: true })
  inputquantmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INPUTVALMODE", nullable: true })
  inputvalmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OUTPUTQUANTMODE", nullable: true })
  outputquantmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OUTPUTVALMODE", nullable: true })
  outputvalmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLEDINPUT", nullable: true })
  billedinput: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLEDOUTPUT", nullable: true })
  billedoutput: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BUYMODE", nullable: true })
  buymode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SELLMODE", nullable: true })
  sellmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENING", nullable: true, default: () => "0" })
  opening: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG1", nullable: true })
  flag1: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG2", nullable: true })
  flag2: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG3", nullable: true })
  flag3: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG4", nullable: true })
  flag4: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG5", nullable: true })
  flag5: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG6", nullable: true })
  flag6: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG7", nullable: true })
  flag7: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG8", nullable: true })
  flag8: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG9", nullable: true })
  flag9: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG10", nullable: true })
  flag10: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "DEFAULTJUSTIFICATION",
    nullable: true,
    length: 255,
  })
  defaultjustification: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG11", nullable: true })
  flag11: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG12", nullable: true })
  flag12: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG13", nullable: true })
  flag13: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG14", nullable: true })
  flag14: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG15", nullable: true })
  flag15: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG16", nullable: true })
  flag16: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "BUYSUPMODE",
    nullable: true,
    default: () => "0",
  })
  buysupmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SALESCOSTMODE",
    nullable: true,
    default: () => "0",
  })
  salescostmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PRODCOSTMODE", default: () => "0" })
  prodcostmode: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDTHIRD", nullable: true, default: () => "0" })
  updthird: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "UPDTAXFREE",
    nullable: true,
    default: () => "0",
  })
  updtaxfree: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "OUTPUTTHIRDMODE",
    nullable: true,
    default: () => "0",
  })
  outputthirdmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDDATEMODE", default: () => "0" })
  upddatemode: number;

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype
  )
  fincustdoctypes: Fincustdoctype[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype2
  )
  fincustdoctypes2: Fincustdoctype[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype3
  )
  fincustdoctypes3: Fincustdoctype[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype4
  )
  fincustdoctypes4: Fincustdoctype[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype5
  )
  fincustdoctypes5: Fincustdoctype[];

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype
  )
  finstoredoctypes: Finstoredoctype[];

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype2
  )
  finstoredoctypes2: Finstoredoctype[];

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype3
  )
  finstoredoctypes3: Finstoredoctype[];

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype4
  )
  finstoredoctypes4: Finstoredoctype[];

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype5
  )
  finstoredoctypes5: Finstoredoctype[];

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype6
  )
  finstoredoctypes6: Finstoredoctype[];

  @Field(() => [Finsupdoctype], { nullable: true })
  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype)
  finsupdoctypes: Finsupdoctype[];

  @Field(() => [Finsupdoctype], { nullable: true })
  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype2)
  finsupdoctypes2: Finsupdoctype[];

  @Field(() => [Finsupdoctype], { nullable: true })
  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype3)
  finsupdoctypes3: Finsupdoctype[];

  @Field(() => [Finsupdoctype], { nullable: true })
  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype4)
  finsupdoctypes4: Finsupdoctype[];

  @Field(() => [Finsupdoctype], { nullable: true })
  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype5)
  finsupdoctypes5: Finsupdoctype[];

  @Field(() => [Itemtrans], { nullable: true })
  @OneToMany(() => Itemtrans, (itemtrans) => itemtrans.mattrntype)
  itemtrans: Itemtrans[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.mattrntypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
