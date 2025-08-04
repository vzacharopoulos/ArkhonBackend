import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5832", ["domaintype", "codeid"], { unique: true })
@ObjectType()
@Entity("PRPOLICYDIM", { schema: "dbo" })
export class Prpolicydim {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "TABLENAME", length: 50 })
  tablename: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "FIELDNAME", length: 50 })
  fieldname: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "QTYSCALE", default: () => "0" })
  qtyscale: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "FIELDTYPE" })
  fieldtype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOOKUPTABLE", nullable: true, length: 50 })
  lookuptable: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOOKUPFIELD", nullable: true, length: 50 })
  lookupfield: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "RESULTFIELD", nullable: true, length: 50 })
  resultfield: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VIEWTABLE", length: 50 })
  viewtable: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "VIEWKEYFIELD", length: 50 })
  viewkeyfield: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "VIEWRESULTFIELD", length: 50 })
  viewresultfield: string;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "MASSINSFRMCLASS", nullable: true, length: 100 })
  massinsfrmclass: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MASSINSDMCLASS", nullable: true, length: 100 })
  massinsdmclass: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCUSTOM", default: () => "(1)" })
  iscustom: number;
}
