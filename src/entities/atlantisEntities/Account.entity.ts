import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accbalsheet } from "./Accbalsheet.entity";
import { Acceventtype } from "./Acceventtype.entity";
import { Lgtaxcategory } from "./Lgtaxcategory.entity";
import { Vatcategory } from "./Vatcategory.entity";
import { Analdist } from "./Analdist.entity";
import { KadfinCategory } from "./KadfinCategory.entity";
import { KadactivityCategory } from "./KadactivityCategory.entity";
import { Company } from "./Company.entity";
import { Accountext } from "./Accountext.entity";
import { Acctrn } from "./Acctrn.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_600", ["id"], { unique: true })
@Index("UNI_604", ["comid", "cfyeid", "code"], { unique: true })
@Index("UNIX_1134", ["code"], {})
@Entity("ACCOUNT", { schema: "dbo" })
export class Account {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "FOREIGNACCOUNT", nullable: true, length: 25 })
  foreignaccount: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FOREIGNDESCR", nullable: true, length: 255 })
  foreigndescr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GRADE" })
  grade: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BEHAVIOUR", default: () => "0" })
  behaviour: number;

  @Field({ nullable: true })
  @Column("float", { name: "MINBALANCE", nullable: true, precision: 53 })
  minbalance: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MAXBALANCE", nullable: true, precision: 53 })
  maxbalance: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISMOVING", default: () => "1" })
  ismoving: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BALANCETRANSFER", default: () => "1" })
  balancetransfer: number;

  @Field({ nullable: true })
  @Column("int", { name: "VDCID", nullable: true })
  vdcid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VATDOCMODE", nullable: true })
  vatdocmode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "INSYNTHETIC",
    nullable: true,
    default: () => "0",
  })
  insynthetic: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ALMODE", default: () => "0" })
  almode: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING1", nullable: true, length: 50 })
  fldstring1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING2", nullable: true, length: 50 })
  fldstring2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING3", nullable: true, length: 50 })
  fldstring3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING4", nullable: true, length: 50 })
  fldstring4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING5", nullable: true, length: 50 })
  fldstring5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDSTRING6", nullable: true, length: 50 })
  fldstring6: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE1", nullable: true })
  flddate1: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE2", nullable: true })
  flddate2: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FLDDATE3", nullable: true })
  flddate3: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT1", nullable: true, precision: 53 })
  fldfloat1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT2", nullable: true, precision: 53 })
  fldfloat2: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT3", nullable: true, precision: 53 })
  fldfloat3: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT4", nullable: true, precision: 53 })
  fldfloat4: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT5", nullable: true, precision: 53 })
  fldfloat5: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FLDFLOAT6", nullable: true, precision: 53 })
  fldfloat6: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID1", nullable: true })
  fltid1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID2", nullable: true })
  fltid2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLTID3", nullable: true })
  fltid3: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "VATUPDMODE", nullable: true })
  vatupdmode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "WARNING", nullable: true, length: 255 })
  warning: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISVATWHOLESALE", nullable: true })
  isvatwholesale: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCDIFFMODELID", nullable: true })
  accdiffmodelid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CFYEID", nullable: true, unique: true })
  cfyeid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FROMACCOUNT", nullable: true, length: 25 })
  fromaccount: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXDISPUTES", nullable: true })
  taxdisputes: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "INVENTORYREST", nullable: true })
  inventoryrest: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXKIND", nullable: true })
  taxkind: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CORACCID", nullable: true })
  coraccid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COROTHERACCID", nullable: true })
  corotheraccid: number | null;

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
  @Column("smallint", { name: "MYDATAVATDISCOUNT", default: () => "(0)" })
  mydatavatdiscount: number;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "MYDATACLASSIFICATIONSETUPCODE",
    nullable: true,
    length: 120,
  })
  mydataclassificationsetupcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATAACCTYPE", nullable: true })
  mydataacctype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATANOMOS", nullable: true })
  mydatanomos: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATADETAILTYPE", nullable: true })
  mydatadetailtype: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

  @Field(() => [Accbalsheet], { nullable: true })
  @OneToMany(() => Accbalsheet, (accbalsheet) => accbalsheet.master)
  accbalsheets: Accbalsheet[];

  @Field(() => [Acceventtype], { nullable: true })
  @OneToMany(() => Acceventtype, (acceventtype) => acceventtype.primaryaccount)
  acceventtypes: Acceventtype[];

  @Field({ nullable: true })
  @ManyToOne(() => Account, (account) => account.accounts)
  @JoinColumn([{ name: "VATID", referencedColumnName: "id" }])
  vat: Account;

  @Field(() => [Account], { nullable: true })
  @OneToMany(() => Account, (account) => account.vat)
  accounts: Account[];

  @Field({ nullable: true })
  @ManyToOne(() => Account, (account) => account.accounts2)
  @JoinColumn([{ name: "IDCOUPLE", referencedColumnName: "id" }])
  idcouple: Account;

  @Field(() => [Account], { nullable: true })
  @OneToMany(() => Account, (account) => account.idcouple)
  accounts2: Account[];

  @Field({ nullable: true })
  @ManyToOne(() => Account, (account) => account.accounts3)
  @JoinColumn([{ name: "IDPRIMARY", referencedColumnName: "id" }])
  idprimary: Account;

  @Field(() => [Account], { nullable: true })
  @OneToMany(() => Account, (account) => account.idprimary)
  accounts3: Account[];

  @Field({ nullable: true })
  @ManyToOne(() => Lgtaxcategory, (lgtaxcategory) => lgtaxcategory.accounts)
  @JoinColumn([{ name: "LGTAXCATEGORYID", referencedColumnName: "codeid" }])
  lgtaxcategory: Lgtaxcategory;

  

  @Field({ nullable: true })
  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.accounts)
  @JoinColumn([{ name: "VTCID", referencedColumnName: "codeid" }])
  vtc: Vatcategory;

  
  @Field({ nullable: true })
  @ManyToOne(() => Analdist, (analdist) => analdist.accounts)
  @JoinColumn([{ name: "ADSID", referencedColumnName: "id" }])
  ads: Analdist;

  @Field({ nullable: true })
  @ManyToOne(() => KadfinCategory, (kadfinCategory) => kadfinCategory.accounts)
  @JoinColumn([{ name: "KADFIN_CATEGORYID", referencedColumnName: "codeid" }])
  kadfinCategory: KadfinCategory;

  @Field({ nullable: true })
  @ManyToOne(
    () => KadactivityCategory,
    (kadactivityCategory) => kadactivityCategory.accounts
  )
  @JoinColumn([{ name: "KADACT_CATEGORYID", referencedColumnName: "codeid" }])
  kadactCategory: KadactivityCategory;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.accounts)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field({ nullable: true })
  @OneToOne(() => Accountext, (accountext) => accountext.acc)
  accountext: Accountext;

  @Field(() => [Acctrn], { nullable: true })
  @OneToMany(() => Acctrn, (acctrn) => acctrn.acc)
  acctrns: Acctrn[];

}