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
import { Documents } from "./Documents.entity";

@Index("UNI_5726", ["id"], { unique: true })
@ObjectType()
@Entity("DOCREL", { schema: "dbo" })
export class Docrel {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { name: "MASTERID" })
  masterid: number;

  @Field({ nullable: true })
  @ManyToOne(() => Documents, (documents) => documents.docrels, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "DOCID", referencedColumnName: "id" }])
  doc: Documents;
}
