import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accevtemplate } from "./Accevtemplate.entity";

@Index("UNI_910", ["id"], { unique: true })
@ObjectType()
@Entity("ACCEVTEMPLINES", { schema: "dbo" })
export class Accevtemplines {
  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "AEPID" })
  aepid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "ACCOUNTMASK", length: 25 })
  accountmask: string;

  @Column("varchar", { name: "CALCFORMULA", nullable: true, length: 255 })
  calcformula: string | null;

  @Column("smallint", { name: "CORD", default: () => "0" })
  cord: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @ManyToOne(
    () => Accevtemplate,
    (accevtemplate) => accevtemplate.accevtemplines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Accevtemplate;
}
