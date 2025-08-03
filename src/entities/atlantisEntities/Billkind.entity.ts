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
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("smallint", { name: "PUBLISHERDOMAINTYPE" })
  publisherdomaintype: number;

  @Column("smallint", { name: "PAYEEDOMAINTYPE" })
  payeedomaintype: number;

  @Column("smallint", {
    name: "BANKFROMACC",
    nullable: true,
    default: () => "0",
  })
  bankfromacc: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @OneToMany(() => Bill, (bill) => bill.billkind)
  bills: Bill[];

  @ManyToOne(() => Docseries, (docseries) => docseries.billkinds)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DSRTYPE", referencedColumnName: "domaintype" },
    { name: "DSRID", referencedColumnName: "codeid" },
  ])
  docseries: Docseries;
}
