import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Glupdaccevent } from "./Glupdaccevent.entity";
import { Company } from "./Company.entity";

@Index("UNI_5366", ["comid", "domaintype", "codeid"], { unique: true })
@Index("UNI_5380", ["id"], { unique: true })
@ObjectType()
@Entity("GLUPDATESTRUCT", { schema: "dbo" })
export class Glupdatestruct {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "SHORTCUT", length: 10 })
  shortcut: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DAYTOTALS", default: () => "0" })
  daytotals: number;

  @Field(() => [Glupdaccevent], { nullable: true })
  @OneToMany(() => Glupdaccevent, (glupdaccevent) => glupdaccevent.link)
  glupdaccevents: Glupdaccevent[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.glupdatestructs)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
