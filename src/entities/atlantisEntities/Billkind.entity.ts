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
import { Bill } from "./Bill.entity";
import { Docseries } from "./Docseries.entity";

@Index("UNI_3114", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("BILLKIND", { schema: "dbo" })
export class Billkind {
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
  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PUBLISHERDOMAINTYPE" })
  publisherdomaintype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "PAYEEDOMAINTYPE" })
  payeedomaintype: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "BANKFROMACC",
    nullable: true,
    default: () => "0",
  })
  bankfromacc: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field(() => [Bill], { nullable: true })
  @OneToMany(() => Bill, (bill) => bill.billkind)
  bills: Bill[];

  @Field({ nullable: true })
  @ManyToOne(() => Docseries, (docseries) => docseries.billkinds)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DSRTYPE", referencedColumnName: "domaintype" },
    { name: "DSRID", referencedColumnName: "codeid" },
  ])
  docseries: Docseries;
}
