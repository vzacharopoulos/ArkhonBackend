import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Company } from "./Company.entity";
import { Storetrade } from "./Storetrade.entity";

@Index("UNI_5318", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("SHIPCAUSE", { schema: "dbo" })
export class Shipcause {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("int", { name: "FUELCAUSE", nullable: true })
  fuelcause: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.shipcauses)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Storetrade], { nullable: true })
  @OneToMany(() => Storetrade, (storetrade) => storetrade.shipcause)
  storetrades: Storetrade[];
}
