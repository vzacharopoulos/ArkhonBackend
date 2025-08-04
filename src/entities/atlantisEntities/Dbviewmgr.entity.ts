import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("UNI_1462", ["id"], { unique: true })
@Index("UNI_1464", ["codeid"], { unique: true })
@Index("UNI_1478", ["descr"], { unique: true })
@ObjectType()
@Entity("DBVIEWMGR", { schema: "dbo" })
export class Dbviewmgr {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "CODEID", unique: true })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", unique: true, length: 100 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "VIEWNAME", length: 30 })
  viewname: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "VIEWBODY", nullable: true })
  viewbody: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "SYSTEMNOTIFICATIONS",
    nullable: true,
    default: () => "(0)",
  })
  systemnotifications: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "USGIDS", nullable: true, length: 250 })
  usgids: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "USRIDS", nullable: true, length: 250 })
  usrids: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FORMID", nullable: true })
  formid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "QIDFIELD", nullable: true, length: 25 })
  qidfield: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SYSTEMNOTIFYWHERE", nullable: true })
  systemnotifywhere: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BROWSERID", nullable: true })
  browserid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BROWSERVIEWROWID", nullable: true, length: 40 })
  browserviewrowid: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FORMCUSTOMIZEID", nullable: true })
  formcustomizeid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TASKNAME", nullable: true, length: 255 })
  taskname: string | null;

 
}
