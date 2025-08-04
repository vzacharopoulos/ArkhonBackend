import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("UNIX_1300", ["dblogindate"], {})
@ObjectType()
@Entity("SERVERSESSIONS", { schema: "dbo" })
export class Serversessions {
  @PrimaryColumn("int", { name: "DBSPID" })
  dbspid: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "DBLOGINDATE" })
  dblogindate: Date;

  @Field({ nullable: true })
  @Column("int", { name: "USERID", nullable: true })
  userid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "USERLOGINDATE" })
  userlogindate: Date;

  @Field({ nullable: true })
  @Column("int", { name: "PROGID" })
  progid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "WRKSTNAME", length: 50 })
  wrkstname: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "OSUSER", length: 50 })
  osuser: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "MCADDR", length: 30 })
  mcaddr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "LOGINFLG", nullable: true })
  loginflg: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VERSION", length: 30 })
  version: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "INFO", nullable: true })
  info: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IPADDRESS", nullable: true, length: 40 })
  ipaddress: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "INITDBLOGINDATE", nullable: true })
  initdblogindate: Date | null;
}
