import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Doy } from "./Doy.entity";
import { Sxcontractor } from "./Sxcontractor.entity";


@Index("UNI_15322", ["codeid"], { unique: true })
@ObjectType()
@Entity("SXACCOUNTANT", { schema: "dbo" })
export class Sxaccountant {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "NAME", length: 50 })
  name: string;

  @Column("varchar", { name: "SURNAME", length: 50 })
  surname: string;

  @Column("varchar", { name: "ADT", nullable: true, length: 25 })
  adt: string | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 25 })
  afm: string | null;

  @Column("varchar", { name: "ADDRESS", nullable: true, length: 50 })
  address: string | null;

  @Column("varchar", { name: "PHONE", nullable: true, length: 25 })
  phone: string | null;

  @Column("varchar", { name: "TK", nullable: true, length: 25 })
  tk: string | null;

  @Column("datetime", { name: "STARTDATE", nullable: true })
  startdate: Date | null;

  @Column("varchar", { name: "LICENSENUM", nullable: true, length: 25 })
  licensenum: string | null;

  @Column("smallint", { name: "LICENSECATEGORY", nullable: true })
  licensecategory: number | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "TAXISUSERNAME", nullable: true, length: 50 })
  taxisusername: string | null;

  @Column("varchar", { name: "TAXISPWD", nullable: true, length: 50 })
  taxispwd: string | null;

  @Column("varchar", { name: "INTRASTATUSERNAME", nullable: true, length: 50 })
  intrastatusername: string | null;

  @Column("varchar", { name: "INTRASTATPWD", nullable: true, length: 50 })
  intrastatpwd: string | null;

  @Column("varchar", { name: "ACCOFFICENAME", nullable: true, length: 50 })
  accofficename: string | null;

  @Column("varchar", { name: "ACCOFFICEAFM", nullable: true, length: 50 })
  accofficeafm: string | null;

  @Column("varchar", { name: "AADESUSERNAME", nullable: true, length: 50 })
  aadesusername: string | null;

  @Column("varchar", { name: "AADEPWD", nullable: true, length: 50 })
  aadepwd: string | null;


  @ManyToOne(() => Doy, (doy) => doy.sxaccountants)
  @JoinColumn([{ name: "DOYID", referencedColumnName: "codeid" }])
  doy: Doy;

  @ManyToOne(() => Doy, (doy) => doy.sxaccountants2)
  @JoinColumn([{ name: "STARTDOYID", referencedColumnName: "codeid" }])
  startdoy: Doy;

  @OneToMany(
    () => Sxcontractor,
    (sxcontractor) => sxcontractor.sxaccountantcode
  )
  sxcontractors: Sxcontractor[];

}
