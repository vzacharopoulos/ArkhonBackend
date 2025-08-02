import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";
import { Bank } from "./Bank";
import { Custtradelines } from "./Custtradelines";

@Index("UNI_2108", ["id"], { unique: true })
@Entity("CUSTBANKACCOUNT", { schema: "dbo" })
export class Custbankaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "ACCOUNTNUM", nullable: true, length: 30 })
  accountnum: string | null;

  @Column("varchar", { name: "IBAN", nullable: true, length: 40 })
  iban: string | null;

  @Column("varchar", { name: "BENEFICIARY", nullable: true, length: 255 })
  beneficiary: string | null;

  @ManyToOne(() => Customer, (customer) => customer.custbankaccounts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Customer;

  @ManyToOne(() => Bank, (bank) => bank.custbankaccounts)
  @JoinColumn([{ name: "BNKID", referencedColumnName: "codeid" }])
  bnk: Bank;

  @OneToMany(() => Custtradelines, (custtradelines) => custtradelines.ban)
  custtradelines: Custtradelines[];
}
