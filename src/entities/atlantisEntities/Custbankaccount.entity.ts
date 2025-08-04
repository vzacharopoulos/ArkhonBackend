import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer.entity";
import { Bank } from "./Bank.entity..entity";
import { Custtradelines } from "./Custtradelines.entity";

@Index("UNI_2108", ["id"], { unique: true })
@ObjectType()
@Entity("CUSTBANKACCOUNT", { schema: "dbo" })
export class Custbankaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOUNTNUM", nullable: true, length: 30 })
  accountnum: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IBAN", nullable: true, length: 40 })
  iban: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BENEFICIARY", nullable: true, length: 255 })
  beneficiary: string | null;

 



}
