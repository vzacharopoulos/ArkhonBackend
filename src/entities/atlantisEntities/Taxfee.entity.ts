import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Taxfeehist } from "./Taxfeehist.entity";

@Index("UNI_15476", ["id"], { unique: true })
@Index("UNI_15486", ["code", "domaintype"], { unique: true })
@ObjectType()
@Entity("TAXFEE", { schema: "dbo" })
export class Taxfee {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("int", { name: "CODE", unique: true })
  code: number;

  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Column("datetime", { name: "STOPDATE", nullable: true })
  stopdate: Date | null;

  @Column("int", { name: "DOMAINTYPE", unique: true })
  domaintype: number;



  @OneToMany(() => Taxfeehist, (taxfeehist) => taxfeehist.taxfee)
  taxfeehists: Taxfeehist[];
}
