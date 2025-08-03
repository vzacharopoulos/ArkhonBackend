import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Taxdevcfg } from "./Taxdevcfg.entity";

@Index("UNI_1400", ["comid", "domaintype", "codeid"], { unique: true })
@ObjectType()
@Entity("PRINTTEMPLATE", { schema: "dbo" })
export class Printtemplate {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 90 })
  descr: string | null;



  @Column("int", { primary: true, name: "DOMAINTYPE", default: () => "(0)" })
  domaintype: number;

  @Column("smallint", {
    name: "AUTOPAPERFEED",
    nullable: true,
    default: () => "0",
  })
  autopaperfeed: number | null;

  @Column("smallint", { name: "PRTCATEGORY", nullable: true })
  prtcategory: number | null;

  @Column("smallint", {
    name: "EINVOICE",
    nullable: true,
    default: () => "(0)",
  })
  einvoice: number | null;

  @Column("smallint", { name: "ISDOTMATRIX", nullable: true })
  isdotmatrix: number | null;



  @ManyToOne(() => Taxdevcfg, (taxdevcfg) => taxdevcfg.printtemplates)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "TDCID", referencedColumnName: "codeid" },
  ])
  taxdevcfg: Taxdevcfg;
}
