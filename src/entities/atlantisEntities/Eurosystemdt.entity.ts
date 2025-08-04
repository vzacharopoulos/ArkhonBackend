import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Eurosystemhd } from "./Eurosystemhd.entity";

@Index("UNI_18190", ["id"], { unique: true })
@Index("UNI_18202", ["code", "eshdid"], { unique: true })
@ObjectType()
@Entity("EUROSYSTEMDT", { schema: "dbo" })
export class Eurosystemdt {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "ESHDID", unique: true })
  eshdid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 100 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLDTYPE" })
  fldtype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "FLDTYPE2DATA", nullable: true, length: 255 })
  fldtype2Data: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLDTYPE3DATA", nullable: true })
  fldtype3Data: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FLDTYPE4DATA", nullable: true })
  fldtype4Data: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FLDCHECKVALUE", default: () => "(0)" })
  fldcheckvalue: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEALLOWED", default: () => "(0)" })
  deallowed: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DEINSTRUCTIONS", nullable: true })
  deinstructions: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CHECKTYPE", nullable: true })
  checktype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CHECKLENGTH", nullable: true })
  checklength: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Eurosystemhd, (eurosystemhd) => eurosystemhd.eurosystemdts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ESHDID", referencedColumnName: "id" }])
  eshd: Eurosystemhd;
}
