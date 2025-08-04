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
import { Mydatalines } from "./Mydatalines.entity";

@Index("UNI_18216", ["id"], { unique: true })
@Index("UNIX_1138", ["mydatalinesid"], {})
@ObjectType()
@Entity("MYDATACLASS", { schema: "dbo" })
export class Mydataclass {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATALINESID" })
  mydatalinesid: number;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "CLASSIFICATIONRECEIPT",
    nullable: true,
    length: 64,
  })
  classificationreceipt: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUMBER", nullable: true })
  linenumber: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "CLASSIFICATIONTYPE",
    nullable: true,
    length: 120,
  })
  classificationtype: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "CLASSIFICATIONCATEGORY",
    nullable: true,
    length: 120,
  })
  classificationcategory: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "AMOUNT", nullable: true, precision: 53 })
  amount: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CLASSIFICATIONID", nullable: true })
  classificationid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "UPLOADDATE", nullable: true })
  uploaddate: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VATCATEGORY", nullable: true })
  vatcategory: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VATEXEMPTION", nullable: true })
  vatexemption: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Mydatalines, (mydatalines) => mydatalines.mydataclasses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MYDATALINESID", referencedColumnName: "id" }])
  mydatalines: Mydatalines;
}
