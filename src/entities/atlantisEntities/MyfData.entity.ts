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
import { Myf } from "./Myf.entity";

@Index("UNI_1440", ["id"], { unique: true })
@ObjectType()
@Entity("MYF_DATA", { schema: "dbo" })
export class MyfData {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "VALTYPE" })
  valtype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "MYFVAL", precision: 53 })
  myfval: number;

  @Field({ nullable: true })
  @Column("float", { name: "MYFTAXVAL", nullable: true, precision: 53 })
  myftaxval: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYFQTY", nullable: true })
  myfqty: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFNOTOBJECT", default: () => "(0)" })
  myfnotobject: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYFNOTE", default: () => "(0)" })
  myfnote: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "MYFDATE" })
  myfdate: Date;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYFCASHREGID", nullable: true, length: 50 })
  myfcashregid: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CURID" })
  curid: number;

  @Field({ nullable: true })
  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PERDOMAIN", nullable: true })
  perdomain: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FROMCOMID", nullable: true })
  fromcomid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Myf, (myf) => myf.myfData, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "MYFID", referencedColumnName: "id" }])
  myf: Myf;
}
