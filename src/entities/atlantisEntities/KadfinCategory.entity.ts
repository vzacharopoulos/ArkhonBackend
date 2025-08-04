import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Account } from "./Account.entity";

@Index("UNI_15496", ["codeid"], { unique: true })
@Index("UNI_15506", ["code"], { unique: true })
@ObjectType()
@Entity("KADFIN_CATEGORY", { schema: "dbo" })
export class KadfinCategory {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 80 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "KADACTIVITY_CATEGORIES",
    nullable: true,
    length: 20,
  })
  kadactivityCategories: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "BALUPDMODE", default: () => "(1)" })
  balupdmode: number;

  @Field(() => [Account], { nullable: true })
  @OneToMany(() => Account, (account) => account.kadfinCategory)
  accounts: Account[];

 
}
