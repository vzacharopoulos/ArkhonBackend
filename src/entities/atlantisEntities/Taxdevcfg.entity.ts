import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Printtemplate } from "./Printtemplate.entity";

@Index("UNI_6222", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("TAXDEVCFG", { schema: "dbo" })
export class Taxdevcfg {
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
  @Column("smallint", { name: "COMPORT", nullable: true })
  comport: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DEVICETYPE", default: () => "1" })
  devicetype: number;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID1", nullable: true })
  vtcid1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID2", nullable: true })
  vtcid2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID3", nullable: true })
  vtcid3: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID4", nullable: true })
  vtcid4: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "VTCID5", nullable: true })
  vtcid5: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS1", nullable: true, length: 50 })
  fttids1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS2", nullable: true, length: 50 })
  fttids2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS3", nullable: true, length: 50 })
  fttids3: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS4", nullable: true, length: 50 })
  fttids4: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS5", nullable: true, length: 50 })
  fttids5: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS6", nullable: true, length: 50 })
  fttids6: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS7", nullable: true, length: 50 })
  fttids7: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS8", nullable: true, length: 50 })
  fttids8: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS9", nullable: true, length: 50 })
  fttids9: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FTTIDS10", nullable: true, length: 50 })
  fttids10: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID1", nullable: true })
  devptrid1: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID2", nullable: true })
  devptrid2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID3", nullable: true })
  devptrid3: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID4", nullable: true })
  devptrid4: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID5", nullable: true })
  devptrid5: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID6", nullable: true })
  devptrid6: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID7", nullable: true })
  devptrid7: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID8", nullable: true })
  devptrid8: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID9", nullable: true })
  devptrid9: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DEVPTRID10", nullable: true })
  devptrid10: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DRAWER", nullable: true })
  drawer: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CUSTSCR", nullable: true })
  custscr: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SCRCOMPORT", nullable: true })
  scrcomport: number | null;

  @Field(() => [Printtemplate], { nullable: true })
  @OneToMany(() => Printtemplate, (printtemplate) => printtemplate.taxdevcfg)
  printtemplates: Printtemplate[];


}
