import { Field } from "@nestjs/graphql";
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
import { Accclosetemplatelines } from "./Accclosetemplatelines.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5390", ["comid", "codeid"], { unique: true })
@Index("UNI_5396", ["id"], { unique: true })
@Entity("ACCCLOSETEMPLATE", { schema: "dbo" })
export class Accclosetemplate {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISTD", default: () => "0" })
  istd: number;

  @Field({ nullable: true })
  @ManyToOne(
    () => Acceventtype,
    (acceventtype) => acceventtype.accclosetemplates
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.accclosetemplates)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Accclosetemplatelines], { nullable: true })
  @OneToMany(
    () => Accclosetemplatelines,
    (accclosetemplatelines) => accclosetemplatelines.link
  )
  accclosetemplatelines: Accclosetemplatelines[];
}
