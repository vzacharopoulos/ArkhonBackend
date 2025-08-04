import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Account } from "./Account.entity";

@Index("UNI_15498", ["codeid"], { unique: true })
@ObjectType()
@Entity("KADACTIVITY_CATEGORY", { schema: "dbo" })
export class KadactivityCategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field(() => [Account], { nullable: true })
  @OneToMany(() => Account, (account) => account.kadactCategory)
  accounts: Account[];

}
