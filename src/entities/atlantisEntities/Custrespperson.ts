import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";

@Index("UNI_2114", ["id"], { unique: true })
@Entity("CUSTRESPPERSON", { schema: "dbo" })
export class Custrespperson {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "MOBILE", nullable: true, length: 20 })
  mobile: string | null;

  @Column("varchar", { name: "NAME", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar", { name: "PRIVATEPHONE", nullable: true, length: 20 })
  privatephone: string | null;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 255 })
  remarks: string | null;

  @Column("smallint", {
    name: "CANMOVETOCRM",
    nullable: true,
    default: () => "(1)",
  })
  canmovetocrm: number | null;

  @Column("int", { name: "CONID", nullable: true })
  conid: number | null;

  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;


  @ManyToOne(() => Customer, (customer) => customer.custresppeople, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Customer;
}
