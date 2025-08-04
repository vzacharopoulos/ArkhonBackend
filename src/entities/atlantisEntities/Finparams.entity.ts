import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_1710", ["comid"], { unique: true })
@ObjectType()
@Entity("FINPARAMS", { schema: "dbo" })
export class Finparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BILLEXPIREINCLUDE", default: () => "(0)" })
  billexpireinclude: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "EXCLUDECANCDOCS", default: () => "(0)" })
  excludecancdocs: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "USEAGES", default: () => "(0)" })
  useages: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "MPTSTARTDATE", nullable: true })
  mptstartdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MPTAUTOCALCBALANCE", default: () => "(0)" })
  mptautocalcbalance: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "MPTAUTOEXCLUDEBALANCE", default: () => "(0)" })
  mptautoexcludebalance: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "MPTAUTOEXCLUDECRDBALANCE",
    default: () => "(0)",
  })
  mptautoexcludecrdbalance: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "IDXCALCBALANCETRNDATE",
    nullable: true,
    default: () => "(1)",
  })
  idxcalcbalancetrndate: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CHECKDUBLICATEBILL",
    nullable: true,
    default: () => "(2)",
  })
  checkdublicatebill: number | null;




  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.finparams, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
