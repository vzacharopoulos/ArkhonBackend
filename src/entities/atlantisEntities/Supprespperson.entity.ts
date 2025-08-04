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
import { Supplier } from "./Supplier.entity";

@Index("UNI_2514", ["id"], { unique: true })
@ObjectType()
@Entity("SUPPRESPPERSON", { schema: "dbo" })
export class Supprespperson {
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
  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

  @Field({ nullable: true })
  @ManyToOne(() => Supplier, (supplier) => supplier.suppresppeople, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Supplier;


}
