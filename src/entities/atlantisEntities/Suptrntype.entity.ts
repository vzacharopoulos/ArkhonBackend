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
import { Finbankdoctype } from "./Finbankdoctype.entity";
import { Fincustdoctype } from "./Fincustdoctype.entity";
import { Finsupdoctype } from "./Finsupdoctype.entity";
import { Suppliertrans } from "./Suppliertrans.entity";
import { Company } from "./Company.entity";

@Index("UNI_5106", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("SUPTRNTYPE", { schema: "dbo" })
export class Suptrntype {
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
  @Column("smallint", { name: "CREDITUPD" })
  creditupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEBITUPD" })
  debitupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "TURNOVERUPD" })
  turnoverupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENING", default: () => "0" })
  opening: number;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "DEFAULTJUSTIFICATION",
    nullable: true,
    length: 255,
  })
  defaultjustification: string | null;

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
  @Column("smallint", { name: "FLAG17", nullable: true })
  flag17: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG18", nullable: true })
  flag18: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG19", nullable: true })
  flag19: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG20", nullable: true })
  flag20: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG5", nullable: true, default: () => "0" })
  flag5: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLAG6", nullable: true, default: () => "0" })
  flag6: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDDATEMODE", default: () => "(-1)" })
  upddatemode: number;

  @Field(() => [Finbankdoctype], { nullable: true })
  @OneToMany(
    () => Finbankdoctype,
    (finbankdoctype) => finbankdoctype.suptrntype
  )
  finbankdoctypes: Finbankdoctype[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.suptrntype
  )
  fincustdoctypes: Fincustdoctype[];

  @Field(() => [Finsupdoctype], { nullable: true })
  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.suptrntype)
  finsupdoctypes: Finsupdoctype[];

  @Field(() => [Suppliertrans], { nullable: true })
  @OneToMany(() => Suppliertrans, (suppliertrans) => suppliertrans.suptrntype)
  suppliertrans: Suppliertrans[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.suptrntypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;


}
