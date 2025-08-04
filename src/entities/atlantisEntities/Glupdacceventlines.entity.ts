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
import { Glupdaccevent } from "./Glupdaccevent.entity";

@Index("UNI_5376", ["id"], { unique: true })
@ObjectType()
@Entity("GLUPDACCEVENTLINES", { schema: "dbo" })
export class Glupdacceventlines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { name: "GUSID" })
  gusid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASK", length: 255 })
  accmask: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "UPDTYPE" })
  updtype: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "UPDFORMULA", length: 255 })
  updformula: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISANALYSED", default: () => "0" })
  isanalysed: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ACCMASKANAL", nullable: true, length: 255 })
  accmaskanal: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ABCMASK", nullable: true, length: 200 })
  abcmask: string | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Glupdaccevent,
    (glupdaccevent) => glupdaccevent.glupdacceventlines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Glupdaccevent;
}
