import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("UNI_202", ["codeid"], { unique: true })
@ObjectType()
@Entity("USERGROUP", { schema: "dbo" })
export class Usergroup {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 30 })
  descr: string;

  @Field({ nullable: true })
  @Column("int", { name: "OFPWDCH", nullable: true })
  ofpwdch: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MINPWDLEN", nullable: true })
  minpwdlen: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "INGLNUM", nullable: true, default: () => "0" })
  inglnum: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "WARNDAYS", nullable: true })
  warndays: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GDPR_SENSITIVE", default: () => "(1)" })
  gdprSensitive: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "GDPR_TABLES_RIGHTS", nullable: true, length: 30 })
  gdprTablesRights: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GDPR_FIELDS_RIGHTS", nullable: true, length: 30 })
  gdprFieldsRights: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "GDPR_ENABLED_KIND", default: () => "(1)" })
  gdprEnabledKind: number;

  @Field({ nullable: true })
  @Column("int", { name: "PASSWORDPOLICYID", nullable: true })
  passwordpolicyid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISPORTALVISIBLEBYDEFAULT", nullable: true })
  isportalvisiblebydefault: number | null;

 
}
