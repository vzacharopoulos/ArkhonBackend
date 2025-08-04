import { Field } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Acceventtype } from "./Acceventtype.entity";
import { Accountevent } from "./Accountevent.entity";
import { Company } from "./Company.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_1200", ["comid", "codeid"], { unique: true })
@Entity("JOURNAL", { schema: "dbo" })
export class Journal {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE", length: 255 })
  title: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", default: () => "1" })
  atype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "KBSDAYS" })
  kbsdays: number;

  @Field({ nullable: true })
  @Column("int", { name: "LASTTRANSNUMBER", default: () => "0" })
  lasttransnumber: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTDATE", nullable: true })
  lastdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "LASTPAGE", default: () => "0" })
  lastpage: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTPRINTDATE", nullable: true })
  lastprintdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISTD", default: () => "0" })
  istd: number;

  @Field(() => [Acceventtype], { nullable: true })
  @OneToMany(() => Acceventtype, (acceventtype) => acceventtype.journal)
  acceventtypes: Acceventtype[];

  @Field(() => [Accountevent], { nullable: true })
  @OneToMany(() => Accountevent, (accountevent) => accountevent.journal)
  accountevents: Accountevent[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.journals)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
