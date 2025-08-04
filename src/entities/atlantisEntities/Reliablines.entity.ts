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
import { Paymentterms } from "./Paymentterms.entity";
import { Reliability } from "./Reliability.entity";

@Index("UNI_5018", ["id"], { unique: true })
@ObjectType()
@Entity("RELIABLINES", { schema: "dbo" })
export class Reliablines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "RLBID", nullable: true })
  rlbid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TRADEID", nullable: true })
  tradeid: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Paymentterms, (paymentterms) => paymentterms.reliablines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PTRID", referencedColumnName: "codeid" },
  ])
  paymentterms: Paymentterms;

  @Field({ nullable: true })
  @ManyToOne(() => Reliability, (reliability) => reliability.reliablines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Reliability;
}
