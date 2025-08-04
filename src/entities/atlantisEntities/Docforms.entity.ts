import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Calcdocforms } from "./Calcdocforms.entity";
import { Uservardocforms } from "./Uservardocforms.entity";
import { Uservardocformsmessages } from "./Uservardocformsmessages.entity";
import { Vardocforms } from "./Vardocforms.entity";
import { Vardocformslines } from "./Vardocformslines.entity";

@Index("UNI_5736_1", ["codeid", "domaintype"], { unique: true })
@Index("UNI_5746", ["id"], { unique: true })
@ObjectType()
@Entity("DOCFORMS", { schema: "dbo" })
export class Docforms {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "PRTID", nullable: true })
  prtid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FRMTYPE", nullable: true, default: () => "0" })
  frmtype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PREVFYEID", default: () => "0" })
  prevfyeid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ACCDATASOURCE", default: () => "0" })
  accdatasource: number;

  @Field({ nullable: true })
  @Column("int", { name: "CLOSEDDOCID", nullable: true })
  closeddocid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "INTERNALSTR", nullable: true, length: 255 })
  internalstr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PRTID2", nullable: true })
  prtid2: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISBALANCE", default: () => "(0)" })
  isbalance: number;

  @Field(() => [Calcdocforms], { nullable: true })
  @OneToMany(() => Calcdocforms, (calcdocforms) => calcdocforms.dfm)
  calcdocforms: Calcdocforms[];

  @Field(() => [Uservardocforms], { nullable: true })
  @OneToMany(() => Uservardocforms, (uservardocforms) => uservardocforms.dfm)
  uservardocforms: Uservardocforms[];

  @Field(() => [Uservardocformsmessages], { nullable: true })
  @OneToMany(
    () => Uservardocformsmessages,
    (uservardocformsmessages) => uservardocformsmessages.dfm
  )
  uservardocformsmessages: Uservardocformsmessages[];

  @Field(() => [Vardocforms], { nullable: true })
  @OneToMany(() => Vardocforms, (vardocforms) => vardocforms.link)
  vardocforms: Vardocforms[];

  @Field(() => [Vardocformslines], { nullable: true })
  @OneToMany(
    () => Vardocformslines,
    (vardocformslines) => vardocformslines.docform
  )
  vardocformslines: Vardocformslines[];
}
