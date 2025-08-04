import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";


@Index("UNI_212", ["id"], { unique: true })
@Index("UNI_214", ["computername"], { unique: true })
@ObjectType()
@Entity("PWORKSTATION", { schema: "dbo" })
export class Pworkstation {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMPUTERNAME", unique: true, length: 255 })
  computername: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRINTER", nullable: true, length: 255 })
  printer: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRINTERDRAFT", nullable: true, length: 255 })
  printerdraft: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DRAFTTYPE", nullable: true, default: () => "0" })
  drafttype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RTLDSRID", nullable: true })
  rtldsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CSHID", nullable: true })
  cshid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONFIG", nullable: true, length: 3 })
  config: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "WSPHONE", nullable: true, length: 20 })
  wsphone: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "WSPROTOCOL",
    nullable: true,
    default: () => "(0)",
  })
  wsprotocol: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CALLCENTERIP", nullable: true, length: 25 })
  callcenterip: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CALLCENTERPORT", nullable: true })
  callcenterport: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "POSDISPLAY",
    nullable: true,
    default: () => "(0)",
  })
  posdisplay: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "POSDISPLAYCOMPORT", nullable: true })
  posdisplaycomport: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EMPDISPLAYMODE", nullable: true })
  empdisplaymode: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONEDIALUSER", nullable: true, length: 50 })
  phonedialuser: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONEDIALPWD", nullable: true, length: 50 })
  phonedialpwd: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONEDIALEXT", nullable: true, length: 20 })
  phonedialext: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INTERNETBROWSERTYPE", default: () => "(0)" })
  internetbrowsertype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "POSSPECIALA1115FLAG", nullable: true })
  posspeciala1115Flag: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "HHCONFIG", nullable: true })
  hhconfig: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "S1DEVCONN", nullable: true })
  s1Devconn: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "REMOTELOGENABLED", nullable: true })
  remotelogenabled: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTMODIFIED", nullable: true })
  lastmodified: Date | null;

}
