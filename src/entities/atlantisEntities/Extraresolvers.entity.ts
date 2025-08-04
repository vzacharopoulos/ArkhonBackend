import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_1112", ["name"], { unique: true })
@ObjectType()
@Entity("EXTRARESOLVERS", { schema: "dbo" })
export class Extraresolvers {
  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "NAME", length: 10 })
  name: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "TABLENAME", length: 50 })
  tablename: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "KEYNAME", length: 50 })
  keyname: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "FIELDNAME", length: 50 })
  fieldname: string;

  @Field({ nullable: true })
  @Column("int", { name: "KEYTYPE" })
  keytype: number;

  @Field({ nullable: true })
  @Column("int", { name: "ISPERMANENT", default: () => "(0)" })
  ispermanent: number;

  @Field({ nullable: true })
  @Column("int", { name: "USECOMID", default: () => "(0)" })
  usecomid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "EXTRAWHERE", nullable: true, length: 100 })
  extrawhere: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DOMAINTYPES", nullable: true, length: 50 })
  domaintypes: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "RESOLVERKIND", default: () => "(0)" })
  resolverkind: number;
}
