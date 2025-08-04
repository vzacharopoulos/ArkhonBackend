import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer.entity";

@Index("UNI_2114", ["id"], { unique: true })
@ObjectType()
@Entity("CUSTRESPPERSON", { schema: "dbo" })
export class Custrespperson {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "MOBILE", nullable: true, length: 20 })
  mobile: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", nullable: true, length: 50 })
  name: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PRIVATEPHONE", nullable: true, length: 20 })
  privatephone: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true, length: 255 })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CANMOVETOCRM",
    nullable: true,
    default: () => "(1)",
  })
  canmovetocrm: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CONID", nullable: true })
  conid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

 
  @Field({ nullable: true })
  @ManyToOne(() => Customer, (customer) => customer.custresppeople, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Customer;
}
