import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Fincustdoctype } from "./Fincustdoctype";
import { Finstoredoctype } from "./Finstoredoctype";
import { Finsupdoctype } from "./Finsupdoctype";
import { Itemtrans } from "./Itemtrans";
import { Company } from "./Company";

@Index("UNI_5254", ["comid", "codeid"], { unique: true })
@Entity("MATTRNTYPE", { schema: "dbo" })
export class Mattrntype {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "UPDMODE", nullable: true })
  updmode: number | null;

  @Column("smallint", { name: "INPUTQUANTMODE", nullable: true })
  inputquantmode: number | null;

  @Column("smallint", { name: "INPUTVALMODE", nullable: true })
  inputvalmode: number | null;

  @Column("smallint", { name: "OUTPUTQUANTMODE", nullable: true })
  outputquantmode: number | null;

  @Column("smallint", { name: "OUTPUTVALMODE", nullable: true })
  outputvalmode: number | null;

  @Column("smallint", { name: "BILLEDINPUT", nullable: true })
  billedinput: number | null;

  @Column("smallint", { name: "BILLEDOUTPUT", nullable: true })
  billedoutput: number | null;

  @Column("smallint", { name: "BUYMODE", nullable: true })
  buymode: number | null;

  @Column("smallint", { name: "SELLMODE", nullable: true })
  sellmode: number | null;

  @Column("smallint", { name: "OPENING", nullable: true, default: () => "0" })
  opening: number | null;

  @Column("smallint", { name: "FLAG1", nullable: true })
  flag1: number | null;

  @Column("smallint", { name: "FLAG2", nullable: true })
  flag2: number | null;

  @Column("smallint", { name: "FLAG3", nullable: true })
  flag3: number | null;

  @Column("smallint", { name: "FLAG4", nullable: true })
  flag4: number | null;

  @Column("smallint", { name: "FLAG5", nullable: true })
  flag5: number | null;

  @Column("smallint", { name: "FLAG6", nullable: true })
  flag6: number | null;

  @Column("smallint", { name: "FLAG7", nullable: true })
  flag7: number | null;

  @Column("smallint", { name: "FLAG8", nullable: true })
  flag8: number | null;

  @Column("smallint", { name: "FLAG9", nullable: true })
  flag9: number | null;

  @Column("smallint", { name: "FLAG10", nullable: true })
  flag10: number | null;

  @Column("varchar", {
    name: "DEFAULTJUSTIFICATION",
    nullable: true,
    length: 255,
  })
  defaultjustification: string | null;

  @Column("smallint", { name: "FLAG11", nullable: true })
  flag11: number | null;

  @Column("smallint", { name: "FLAG12", nullable: true })
  flag12: number | null;

  @Column("smallint", { name: "FLAG13", nullable: true })
  flag13: number | null;

  @Column("smallint", { name: "FLAG14", nullable: true })
  flag14: number | null;

  @Column("smallint", { name: "FLAG15", nullable: true })
  flag15: number | null;

  @Column("smallint", { name: "FLAG16", nullable: true })
  flag16: number | null;

  @Column("smallint", {
    name: "BUYSUPMODE",
    nullable: true,
    default: () => "0",
  })
  buysupmode: number | null;

  @Column("smallint", {
    name: "SALESCOSTMODE",
    nullable: true,
    default: () => "0",
  })
  salescostmode: number | null;

  @Column("smallint", { name: "PRODCOSTMODE", default: () => "0" })
  prodcostmode: number;

  @Column("smallint", { name: "UPDTHIRD", nullable: true, default: () => "0" })
  updthird: number | null;

  @Column("smallint", {
    name: "UPDTAXFREE",
    nullable: true,
    default: () => "0",
  })
  updtaxfree: number | null;

  @Column("smallint", {
    name: "OUTPUTTHIRDMODE",
    nullable: true,
    default: () => "0",
  })
  outputthirdmode: number | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("smallint", { name: "UPDDATEMODE", default: () => "0" })
  upddatemode: number;

  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype
  )
  fincustdoctypes: Fincustdoctype[];

  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype2
  )
  fincustdoctypes2: Fincustdoctype[];

  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype3
  )
  fincustdoctypes3: Fincustdoctype[];

  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype4
  )
  fincustdoctypes4: Fincustdoctype[];

  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.mattrntype5
  )
  fincustdoctypes5: Fincustdoctype[];

  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype
  )
  finstoredoctypes: Finstoredoctype[];

  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype2
  )
  finstoredoctypes2: Finstoredoctype[];

  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype3
  )
  finstoredoctypes3: Finstoredoctype[];

  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype4
  )
  finstoredoctypes4: Finstoredoctype[];

  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype5
  )
  finstoredoctypes5: Finstoredoctype[];

  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.mattrntype6
  )
  finstoredoctypes6: Finstoredoctype[];

  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype)
  finsupdoctypes: Finsupdoctype[];

  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype2)
  finsupdoctypes2: Finsupdoctype[];

  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype3)
  finsupdoctypes3: Finsupdoctype[];

  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype4)
  finsupdoctypes4: Finsupdoctype[];

  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.mattrntype5)
  finsupdoctypes5: Finsupdoctype[];

  @OneToMany(() => Itemtrans, (itemtrans) => itemtrans.mattrntype)
  itemtrans: Itemtrans[];

  @ManyToOne(() => Company, (company) => company.mattrntypes)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
