import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Docrel } from "./Docrel.entity";

@Index("UNI_5724", ["id"], { unique: true })
@Index("UNIX_1046", ["masterid"], {})
@ObjectType()
@Entity("DOCUMENTS", { schema: "dbo" })
export class Documents {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "FILENAME", nullable: true, length: 255 })
  filename: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "MASTERID", nullable: true })
  masterid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DOCTYPE", nullable: true, length: 5 })
  doctype: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DCTID", nullable: true })
  dctid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISFOLDER", nullable: true, default: () => "0" })
  isfolder: number | null;



  @Field({ nullable: true })
  @Column("datetime", { name: "DOCDATE", nullable: true })
  docdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM", nullable: true })
  linenum: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "HASIMAGE", nullable: true, default: () => "0" })
  hasimage: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISZIP", nullable: true, default: () => "0" })
  iszip: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "UPLOADDATE", nullable: true })
  uploaddate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "UPLOADDESCR", nullable: true, length: 50 })
  uploaddescr: string | null;

  @Field(() => [Docrel], { nullable: true })
  @OneToMany(() => Docrel, (docrel) => docrel.doc)
  docrels: Docrel[];
}
