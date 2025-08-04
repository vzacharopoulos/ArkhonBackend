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
import { Fiscperiod } from "./Fiscperiod.entity";
import { Company } from "./Company.entity";

@Index("UNI_400", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("FISCYEAR", { schema: "dbo" })
export class Fiscyear {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "BEGINDATE" })
  begindate: Date;

  @Field({ nullable: true })
  @Column("datetime", { name: "ENDDATE" })
  enddate: Date;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", length: 25 })
  name: string;

  @Field({ nullable: true })
  @Column("int", { name: "ISCLOSED", nullable: true, default: () => "0" })
  isclosed: number | null;

  @Field(() => [Fiscperiod], { nullable: true })
  @OneToMany(() => Fiscperiod, (fiscperiod) => fiscperiod.fiscyear)
  fiscperiods: Fiscperiod[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.fiscyears, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

}
