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
import { Costfolderest } from "./Costfolderest.entity";

@Index("UNI_3458", ["id"], { unique: true })
@Index("UNI_3460", ["comid", "domaintype", "code"], { unique: true })
@ObjectType()
@Entity("COSTFOLDER", { schema: "dbo" })
export class Costfolder {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", unique: true })
  domaintype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "UPDDATE", nullable: true })
  upddate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "CFODATE", nullable: true })
  cfodate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "CFTID", nullable: true })
  cftid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASKEST", nullable: true, length: 25 })
  accmaskest: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "ESTDATE", nullable: true })
  estdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.costfolders)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Costfolderest], { nullable: true })
  @OneToMany(() => Costfolderest, (costfolderest) => costfolderest.cfo)
  costfolderests: Costfolderest[];
}
