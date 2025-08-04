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
import { Customertrans } from "./Customertrans.entity";
import { Company } from "./Company.entity";
import { Finbankdoctype } from "./Finbankdoctype.entity";
import { Fincustdoctype } from "./Fincustdoctype.entity";

@Index("UNI_5100", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("CUSTTRNTYPE", { schema: "dbo" })
export class Custtrntype {
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

  @Field(() => [Customertrans], { nullable: true })
  @OneToMany(() => Customertrans, (customertrans) => customertrans.custtrntype)
  customertrans: Customertrans[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.custtrntypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Finbankdoctype], { nullable: true })
  @OneToMany(
    () => Finbankdoctype,
    (finbankdoctype) => finbankdoctype.custtrntype
  )
  finbankdoctypes: Finbankdoctype[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.custtrntype
  )
  fincustdoctypes: Fincustdoctype[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.custtrntype2
  )
  fincustdoctypes2: Fincustdoctype[];

}
