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
import { Mydataheader } from "./Mydataheader.entity";

@Index("UNI_18212", ["id"], { unique: true })
@Index("UNIX_1142", ["mydataheaderid"], {})
@ObjectType()
@Entity("MYDATAEXPLINES", { schema: "dbo" })
export class Mydataexplines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATAHEADERID" })
  mydataheaderid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUMBER", nullable: true })
  linenumber: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "EXPTYPE", nullable: true })
  exptype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATAVPRC", nullable: true })
  mydatavprc: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE", nullable: true, precision: 53 })
  expvalue: number | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "DEDUCTIONSPERCENTAGE",
    nullable: true,
    precision: 53,
  })
  deductionspercentage: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LINECOMMENTS", nullable: true, length: 128 })
  linecomments: string | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Mydataheader,
    (mydataheader) => mydataheader.mydataexplines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "MYDATAHEADERID", referencedColumnName: "id" }])
  mydataheader: Mydataheader;
}
