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
import { Acceventtype } from "./Acceventtype.entity";
import { Company } from "./Company.entity";
import { Accevtemplines } from "./Accevtemplines.entity";

@Index("UNI_900", ["comid", "codeid"], { unique: true })
@Index("UNI_914", ["id"], { unique: true })
@ObjectType()
@Entity("ACCEVTEMPLATE", { schema: "dbo" })
export class Accevtemplate {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PERIODICITY", default: () => "0" })
  periodicity: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "REPEATONDAYS", nullable: true, length: 255 })
  repeatondays: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FASTENTRY", nullable: true, default: () => "0" })
  fastentry: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "FASTENTRYDATA", nullable: true })
  fastentrydata: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODEPREFIX", nullable: true, length: 10 })
  codeprefix: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Acceventtype, (acceventtype) => acceventtype.accevtemplates)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.accevtemplates)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Accevtemplines], { nullable: true })
  @OneToMany(() => Accevtemplines, (accevtemplines) => accevtemplines.link)
  accevtemplines: Accevtemplines[];
}
