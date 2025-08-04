import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accclosetemplate } from "./Accclosetemplate.entity";

@Index("UNI_5392", ["id"], { unique: true })
@ObjectType()
@Entity("ACCCLOSETEMPLATELINES", { schema: "dbo" })
export class Accclosetemplatelines {
  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "AECID" })
  aecid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCFROM", length: 255 })
  accfrom: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCTO", nullable: true, length: 255 })
  accto: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCDEBIT", nullable: true })
  accdebit: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ACCCREDIT", nullable: true })
  acccredit: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @ManyToOne(
    () => Accclosetemplate,
    (accclosetemplate) => accclosetemplate.accclosetemplatelines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Accclosetemplate;
}
