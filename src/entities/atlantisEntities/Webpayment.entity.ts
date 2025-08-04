import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("UNI_1674", ["codeid"], { unique: true })
@ObjectType()
@Entity("WEBPAYMENT", { schema: "dbo" })
export class Webpayment {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "PAYDATADEF", nullable: true })
  paydatadef: string | null;


}
