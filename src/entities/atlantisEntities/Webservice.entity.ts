import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Webaccountlns } from "./Webaccountlns.entity";

@Index("UNI_18256", ["codeid"], { unique: true })
@ObjectType()
@Entity("WEBSERVICE", { schema: "dbo" })
export class Webservice {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 50 })
  name: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE" })
  isactive: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true, length: 255 })
  remarks: string | null;

  @Field(() => [Webaccountlns], { nullable: true })
  @OneToMany(() => Webaccountlns, (webaccountlns) => webaccountlns.websrv)
  webaccountlns: Webaccountlns[];

 
}
