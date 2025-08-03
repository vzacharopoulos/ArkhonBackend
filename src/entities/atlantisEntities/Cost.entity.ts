import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Company } from "./Company.entity";
import { Costfolderest } from "./Costfolderest.entity";

@Index("UNI_5414", ["comid", "codeid", "domaintype"], { unique: true })
@ObjectType()
@Entity("COST", { schema: "dbo" })
export class Cost {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "STOCKMODE", nullable: true, default: () => "0" })
  stockmode: number | null;

  @Column("smallint", { name: "DASMCOST", nullable: true, default: () => "0" })
  dasmcost: number | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("varchar", { name: "VATACCMASK", nullable: true, length: 25 })
  vataccmask: string | null;

  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Column("smallint", {
    primary: true,
    name: "DOMAINTYPE",
    default: () => "(0)",
  })
  domaintype: number;

  @ManyToOne(() => Company, (company) => company.costs)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Costfolderest, (costfolderest) => costfolderest.cost)
  costfolderests: Costfolderest[];
}
