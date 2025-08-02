import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Suptrntype } from "./Suptrntype";
import { Bnktrntype } from "./Bnktrntype";
import { Custtrntype } from "./Custtrntype";
import { Company } from "./Company";
import { Valfndbnktrn } from "./Valfndbnktrn";

@Index("UNI_5180", ["comid", "codeid"], { unique: true })
@Index("UNI_5238", ["id"], { unique: true })
@Entity("FINBANKDOCTYPE", { schema: "dbo" })
export class Finbankdoctype {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "TNACODE", length: 30 })
  tnacode: string;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("smallint", { name: "CREATEMULTIPLEFINTRANS", default: () => "0" })
  createmultiplefintrans: number;

  @Column("smallint", { name: "NEEDAUTHORITY", default: () => "0" })
  needauthority: number;

  @Column("varchar", { name: "INTRASTATCODE", nullable: true, length: 10 })
  intrastatcode: string | null;

  @Column("smallint", { name: "FOREIGNCURID", default: () => "1" })
  foreigncurid: number;

  @Column("smallint", {
    name: "REVERSEVALUES",
    nullable: true,
    default: () => "0",
  })
  reversevalues: number | null;

  @Column("smallint", { name: "GLUPDMODE", nullable: true, default: () => "0" })
  glupdmode: number | null;

  @Column("smallint", { name: "OPENITEMTYPE", nullable: true })
  openitemtype: number | null;

  @Column("smallint", { name: "DAYTOTALS", nullable: true, default: () => "0" })
  daytotals: number | null;

  @Column("smallint", { name: "DAYSRANGE", nullable: true, default: () => "0" })
  daysrange: number | null;

  @Column("int", { name: "GUSIDCUS", nullable: true })
  gusidcus: number | null;

  @Column("int", { name: "GUSIDSUP", nullable: true })
  gusidsup: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("int", { name: "GUSID", nullable: true })
  gusid: number | null;

  @Column("smallint", { name: "BILLDEL", default: () => "0" })
  billdel: number;

  @Column("int", { name: "BANKDLAID", nullable: true })
  bankdlaid: number | null;

  @Column("float", {
    name: "CALCDIFFEXCH",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  calcdiffexch: number | null;

  @Column("int", { name: "GUSIDFIN", nullable: true })
  gusidfin: number | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;

  @Column("int", { name: "GUSIDACC", nullable: true })
  gusidacc: number | null;

  @Column("int", { name: "FBTID", nullable: true })
  fbtid: number | null;

  @Column("smallint", { name: "ABCMODE", nullable: true, default: () => "1" })
  abcmode: number | null;

  @Column("smallint", { name: "MYFVALTYPE", nullable: true })
  myfvaltype: number | null;

  @Column("smallint", { name: "MYFQTYUPD", default: () => "(0)" })
  myfqtyupd: number;

  @Column("smallint", { name: "MYFVALUPD", default: () => "(0)" })
  myfvalupd: number;

  @Column("smallint", { name: "INVOLVESSV", default: () => "(0)" })
  involvessv: number;

  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Column("smallint", { name: "ISMYDATAFROMACC", nullable: true })
  ismydatafromacc: number | null;

  @ManyToOne(() => Suptrntype, (suptrntype) => suptrntype.finbankdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FSTID", referencedColumnName: "codeid" },
  ])
  suptrntype: Suptrntype;

  @ManyToOne(() => Bnktrntype, (bnktrntype) => bnktrntype.finbankdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FTTID", referencedColumnName: "codeid" },
  ])
  bnktrntype: Bnktrntype;

  @ManyToOne(() => Custtrntype, (custtrntype) => custtrntype.finbankdoctypes)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "FCTID", referencedColumnName: "codeid" },
  ])
  custtrntype: Custtrntype;

  @ManyToOne(() => Company, (company) => company.finbankdoctypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Valfndbnktrn, (valfndbnktrn) => valfndbnktrn.link)
  valfndbnktrns: Valfndbnktrn[];
}
