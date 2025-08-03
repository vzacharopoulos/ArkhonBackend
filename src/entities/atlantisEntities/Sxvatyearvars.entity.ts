import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("UNI_SX15328", ["id"], { unique: true })
@Index("UNI_SX15330", ["codeid", "ayear"], { unique: true })
@ObjectType()
@Entity("SXVATYEARVARS", { schema: "dbo" })
export class Sxvatyearvars {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "CODEID", unique: true, length: 6 })
  codeid: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("int", { name: "AYEAR", unique: true, default: () => "0" })
  ayear: number;

  @Column("varchar", { name: "FORMULA", nullable: true })
  formula: string | null;

  @Column("varchar", { name: "FORMULAGL", nullable: true })
  formulagl: string | null;

  @Column("varchar", { name: "FORMULAPER", nullable: true })
  formulaper: string | null;

  @Column("int", { name: "ATYPE" })
  atype: number;

  @Column("varchar", { name: "NEWCODEID", nullable: true, length: 6 })
  newcodeid: string | null;


}
