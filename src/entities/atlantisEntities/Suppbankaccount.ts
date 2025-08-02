import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Supplier } from "./Supplier";
import { Bank } from "./Bank";
import { Suptradelines } from "./Suptradelines";

@Index("UNI_2508", ["id"], { unique: true })
@Entity("SUPPBANKACCOUNT", { schema: "dbo" })
export class Suppbankaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "ACCOUNTNUM", nullable: true, length: 30 })
  accountnum: string | null;

  @Column("varchar", { name: "IBAN", nullable: true, length: 40 })
  iban: string | null;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 255 })
  remarks: string | null;

  @Column("varchar", { name: "BENEFICIARY", nullable: true, length: 255 })
  beneficiary: string | null;

  @ManyToOne(() => Supplier, (supplier) => supplier.suppbankaccounts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Supplier;

  @ManyToOne(() => Bank, (bank) => bank.suppbankaccounts)
  @JoinColumn([{ name: "BNKID", referencedColumnName: "codeid" }])
  bnk: Bank;

  @OneToMany(() => Suptradelines, (suptradelines) => suptradelines.ban)
  suptradelines: Suptradelines[];
}
