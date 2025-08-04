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
import { Eurosystemlistshd } from "./Eurosystemlistshd.entity";

@Index("UNI_18196", ["id"], { unique: true })
@Index("UNI_18204", ["code", "eslihdid"], { unique: true })
@ObjectType()
@Entity("EUROSYSTEMLISTSDT", { schema: "dbo" })
export class Eurosystemlistsdt {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "ESLIHDID", unique: true })
  eslihdid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 5 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("datetime", { name: "TIMESTAMP" })
  timestamp: Date;

  @Field({ nullable: true })
  @Column("varchar", { name: "DEINSTRUCTIONS", nullable: true })
  deinstructions: string | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Eurosystemlistshd,
    (eurosystemlistshd) => eurosystemlistshd.eurosystemlistsdts,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "ESLIHDID", referencedColumnName: "id" }])
  eslihd: Eurosystemlistshd;
}
