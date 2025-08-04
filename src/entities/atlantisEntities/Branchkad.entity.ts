import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Branch } from "./Branch.entity";

@Index("UNI_6552", ["comid", "branchcodeid", "sxkadid"], { unique: true })
@ObjectType()
@Entity("BRANCHKAD", { schema: "dbo" })
export class Branchkad {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "BRANCHCODEID" })
  branchcodeid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "SXKADID" })
  sxkadid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KADKIND" })
  kadkind: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "STARTDATE", nullable: true })
  startdate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "STOPDATE", nullable: true })
  stopdate: Date | null;

  @Field({ nullable: true })
  @ManyToOne(() => Branch, (branch) => branch.branchkads, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRANCHCODEID", referencedColumnName: "codeid" },
  ])
  branch: Branch;
}
