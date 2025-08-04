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
import { Company } from "./Company.entity";
import { Varcomtemplines } from "./Varcomtemplines.entity";

@Index("UNI_6334", ["comid", "codeid"], { unique: true })
@Index("UNI_6336", ["id"], { unique: true })
@ObjectType()
@Entity("VARCOMTEMPLATE", { schema: "dbo" })
export class Varcomtemplate {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCETYPE", nullable: true })
  sourcetype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.varcomtemplates)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Varcomtemplines], { nullable: true })
  @OneToMany(() => Varcomtemplines, (varcomtemplines) => varcomtemplines.link)
  varcomtemplines: Varcomtemplines[];
}
