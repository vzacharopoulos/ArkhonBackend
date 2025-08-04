import { Field } from "@nestjs/graphql";
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

  @Field({ nullable: true })
  @Column("int", { name: "LUSER" })
  luser: number;

  @Field({ nullable: true })
  @Column("int", { name: "LCOMPANY" })
  lcompany: number;

  @Field({ nullable: true })
  @Column("int", { name: "LBRANCH" })
  lbranch: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { name: "SODTYPE" })
  sodtype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "WEBGROUP", nullable: true, length: 255 })
  webgroup: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EXPTIME", nullable: true })
  exptime: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BLOCKED", nullable: true })
  blocked: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "XSECURITY", nullable: true })
  xsecurity: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Webservice, (webservice) => webservice.webaccountlns)
  @JoinColumn([{ name: "WEBSRVID", referencedColumnName: "codeid" }])
  websrv: Webservice;

  @Field({ nullable: true })
  @ManyToOne(() => Webaccount, (webaccount) => webaccount.webaccountlns, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "WEBACCID", referencedColumnName: "id" }])
  webacc: Webaccount;
}
