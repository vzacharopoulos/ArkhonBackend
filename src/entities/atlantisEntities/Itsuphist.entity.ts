import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Itemsup } from "./Itemsup.entity";

@Index("UNI_2866", ["iteid", "supid", "codedate"], { unique: true })
@ObjectType()
@Entity("ITSUPHIST", { schema: "dbo" })
export class Itsuphist {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SUPID" })
  supid: number;

  @Field({ nullable: true })
  @Column("datetime", { primary: true, name: "CODEDATE" })
  codedate: Date;

  @Field({ nullable: true })
  @Column("varchar", { name: "SUPITECODE", length: 25 })
  supitecode: string;

  @Field({ nullable: true })
  @ManyToOne(() => Itemsup, (itemsup) => itemsup.itsuphists, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "ITEID", referencedColumnName: "iteid" },
    { name: "SUPID", referencedColumnName: "supid" },
  ])
  itemsup: Itemsup;
}
