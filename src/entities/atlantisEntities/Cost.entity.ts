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
import { Company } from "./Company.entity";
import { Costfolderest } from "./Costfolderest.entity";

@Index("UNI_5414", ["comid", "codeid", "domaintype"], { unique: true })
@ObjectType()
@Entity("COST", { schema: "dbo" })
export class Cost {
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
  @Column("smallint", { name: "STOCKMODE", nullable: true, default: () => "0" })
  stockmode: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DASMCOST", nullable: true, default: () => "0" })
  dasmcost: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "VATACCMASK", nullable: true, length: 25 })
  vataccmask: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID", nullable: true })
  vtcid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    primary: true,
    name: "DOMAINTYPE",
    default: () => "(0)",
  })
  domaintype: number;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.costs)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Costfolderest], { nullable: true })
  @OneToMany(() => Costfolderest, (costfolderest) => costfolderest.cost)
  costfolderests: Costfolderest[];
}
