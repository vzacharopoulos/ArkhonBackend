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
import { Supplier } from "./Supplier.entity";
import { Bank } from "./Bank.entity..entity";
import { Suptradelines } from "./Suptradelines.entity";

@Index("UNI_2508", ["id"], { unique: true })
@ObjectType()
@Entity("SUPPBANKACCOUNT", { schema: "dbo" })
export class Suppbankaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCOUNTNUM", nullable: true, length: 30 })
  accountnum: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "IBAN", nullable: true, length: 40 })
  iban: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true, length: 255 })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "BENEFICIARY", nullable: true, length: 255 })
  beneficiary: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Supplier, (supplier) => supplier.suppbankaccounts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Supplier;

  @Field({ nullable: true })
  @ManyToOne(() => Bank, (bank) => bank.suppbankaccounts)
  @JoinColumn([{ name: "BNKID", referencedColumnName: "codeid" }])
  bnk: Bank;

  @Field(() => [Suptradelines], { nullable: true })
  @OneToMany(() => Suptradelines, (suptradelines) => suptradelines.ban)
  suptradelines: Suptradelines[];
}
