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
import { Eurosystemck } from "./Eurosystemck.entity";
import { Eurosystemdt } from "./Eurosystemdt.entity";
import { Company } from "./Company.entity";

@Index("UNI_18188", ["id"], { unique: true })
@Index("UNI_18200", ["code", "comid", "fyeid"], { unique: true })
@ObjectType()
@Entity("EUROSYSTEMHD", { schema: "dbo" })
export class Eurosystemhd {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FYEID", unique: true })
  fyeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "CATEGORYID" })
  categoryid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CATEGORY", nullable: true, length: 50 })
  category: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "PREVYEARAMOUNTS", default: () => "(0)" })
  prevyearamounts: number;

  @Field({ nullable: true })
  @Column("int", { name: "DOCFORMSCODEID", nullable: true })
  docformscodeid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOCFORMSDOMAINTYPE", nullable: true })
  docformsdomaintype: number | null;

  @Field(() => [Eurosystemck], { nullable: true })
  @OneToMany(() => Eurosystemck, (eurosystemck) => eurosystemck.eshd)
  eurosystemcks: Eurosystemck[];

  @Field(() => [Eurosystemdt], { nullable: true })
  @OneToMany(() => Eurosystemdt, (eurosystemdt) => eurosystemdt.eshd)
  eurosystemdts: Eurosystemdt[];

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.eurosystemhds, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;


}
