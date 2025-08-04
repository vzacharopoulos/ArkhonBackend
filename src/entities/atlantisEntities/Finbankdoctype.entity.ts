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
import { Suptrntype } from "./Suptrntype.entity";
import { Bnktrntype } from "./Bnktrntype.entity";
import { Custtrntype } from "./Custtrntype.entity";
import { Company } from "./Company.entity";
import { Valfndbnktrn } from "./Valfndbnktrn.entity";

@Index("UNI_5180", ["comid", "codeid"], { unique: true })
@Index("UNI_5238", ["id"], { unique: true })
@ObjectType()
@Entity("FINBANKDOCTYPE", { schema: "dbo" })
export class Finbankdoctype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "TNACODE", length: 30 })
  tnacode: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CREATEMULTIPLEFINTRANS", default: () => "0" })
  createmultiplefintrans: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "NEEDAUTHORITY", default: () => "0" })
  needauthority: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FOREIGNCURID", default: () => "1" })
  foreigncurid: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "REVERSEVALUES",
    nullable: true,
    default: () => "0",
  })
  reversevalues: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GLUPDMODE", nullable: true, default: () => "0" })
  glupdmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYTOTALS", nullable: true, default: () => "0" })
  daytotals: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYSRANGE", nullable: true, default: () => "0" })
  daysrange: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDCUS", nullable: true })
  gusidcus: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDSUP", nullable: true })
  gusidsup: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLDEL", default: () => "0" })
  billdel: number;

  @Field({ nullable: true })
  @Column("int", { name: "BANKDLAID", nullable: true })
  bankdlaid: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "CALCDIFFEXCH",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  calcdiffexch: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDFIN", nullable: true })
  gusidfin: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDACC", nullable: true })
  gusidacc: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FBTID", nullable: true })
  fbtid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ABCMODE", nullable: true, default: () => "1" })
  abcmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFVALTYPE", nullable: true })
  myfvaltype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFQTYUPD", default: () => "(0)" })
  myfqtyupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFVALUPD", default: () => "(0)" })
  myfvalupd: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISMYDATAFROMACC", nullable: true })
  ismydatafromacc: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Suptrntype, (suptrntype) => suptrntype.finbankdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FSTID", referencedColumnName: "codeid" },
  ])
  suptrntype: Suptrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Bnktrntype, (bnktrntype) => bnktrntype.finbankdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FTTID", referencedColumnName: "codeid" },
  ])
  bnktrntype: Bnktrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Custtrntype, (custtrntype) => custtrntype.finbankdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FCTID", referencedColumnName: "codeid" },
  ])
  custtrntype: Custtrntype;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.finbankdoctypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Valfndbnktrn], { nullable: true })
  @OneToMany(() => Valfndbnktrn, (valfndbnktrn) => valfndbnktrn.link)
  valfndbnktrns: Valfndbnktrn[];
}
