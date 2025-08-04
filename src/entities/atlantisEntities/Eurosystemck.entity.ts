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
import { Eurosystemhd } from "./Eurosystemhd.entity";

@Index("UNI_18234", ["id"], { unique: true })
@ObjectType()
@Entity("EUROSYSTEMCK", { schema: "dbo" })
export class Eurosystemck {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "EXPRESSION" })
  expression: string;

  @Field({ nullable: true })
  @ManyToOne(() => Eurosystemhd, (eurosystemhd) => eurosystemhd.eurosystemcks, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ESHDID", referencedColumnName: "id" }])
  eshd: Eurosystemhd;
}
