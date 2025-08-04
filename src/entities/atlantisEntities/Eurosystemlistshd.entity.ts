import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Eurosystemlistsdt } from "./Eurosystemlistsdt.entity";

@Index("UNI_18194", ["id"], { unique: true })
@ObjectType()
@Entity("EUROSYSTEMLISTSHD", { schema: "dbo" })
export class Eurosystemlistshd {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("datetime", { name: "TIMESTAMP" })
  timestamp: Date;

  @Field(() => [Eurosystemlistsdt], { nullable: true })
  @OneToMany(
    () => Eurosystemlistsdt,
    (eurosystemlistsdt) => eurosystemlistsdt.eslihd
  )
  eurosystemlistsdts: Eurosystemlistsdt[];
}
