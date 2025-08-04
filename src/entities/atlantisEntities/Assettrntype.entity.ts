import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Assettrans } from "./Assettrans.entity";
import { Fincustdoctype } from "./Fincustdoctype.entity";
import { Finstoredoctype } from "./Finstoredoctype.entity";
import { Finsupdoctype } from "./Finsupdoctype.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5628", ["comid", "codeid"], { unique: true })
@Entity("ASSETTRNTYPE", { schema: "dbo" })
export class Assettrntype {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("int", { name: "ASSETNATURE" })
  assetnature: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "DPADOMAIN", nullable: true, default: () => "0" })
  dpadomain: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DEFJUSTIFICATION", nullable: true, length: 255 })
  defjustification: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFISCAL", default: () => "1" })
  isfiscal: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISIAS", default: () => "0" })
  isias: number;

  @Field(() => [Assettrans], { nullable: true })
  @OneToMany(() => Assettrans, (assettrans) => assettrans.assettrntype)
  assettrans: Assettrans[];

  @Field(() => [Fincustdoctype], { nullable: true })
  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.assettrntype
  )
  fincustdoctypes: Fincustdoctype[];

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.assettrntype
  )
  finstoredoctypes: Finstoredoctype[];

  @Field(() => [Finstoredoctype], { nullable: true })
  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.assettrntype2
  )
  finstoredoctypes2: Finstoredoctype[];

  @Field(() => [Finsupdoctype], { nullable: true })
  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.assettrntype)
  finsupdoctypes: Finsupdoctype[];
}
