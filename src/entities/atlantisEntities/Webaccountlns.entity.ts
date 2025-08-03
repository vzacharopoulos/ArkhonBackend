import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Webservice } from "./Webservice.entity";
import { Webaccount } from "./Webaccount.entity";

@Index("UNI_18250", ["id"], { unique: true })
@ObjectType()
@Entity("WEBACCOUNTLNS", { schema: "dbo" })
export class Webaccountlns {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "LUSER" })
  luser: number;

  @Column("int", { name: "LCOMPANY" })
  lcompany: number;

  @Column("int", { name: "LBRANCH" })
  lbranch: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("int", { name: "SODTYPE" })
  sodtype: number;

  @Column("varchar", { name: "WEBGROUP", nullable: true, length: 255 })
  webgroup: string | null;

  @Column("smallint", { name: "EXPTIME", nullable: true })
  exptime: number | null;

  @Column("smallint", { name: "BLOCKED", nullable: true })
  blocked: number | null;

  @Column("smallint", { name: "XSECURITY", nullable: true })
  xsecurity: number | null;

  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @ManyToOne(() => Webservice, (webservice) => webservice.webaccountlns)
  @JoinColumn([{ name: "WEBSRVID", referencedColumnName: "codeid" }])
  websrv: Webservice;

  @ManyToOne(() => Webaccount, (webaccount) => webaccount.webaccountlns, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "WEBACCID", referencedColumnName: "id" }])
  webacc: Webaccount;
}
