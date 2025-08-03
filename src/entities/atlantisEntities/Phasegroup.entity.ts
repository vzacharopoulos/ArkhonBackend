import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Specification } from "./Specification.entity";
import { Storetrade } from "./Storetrade.entity";


@Index("UNI_5520", ["comid", "codeid"], { unique: true })
@Index("UNI_5522", ["id"], { unique: true })
@ObjectType()
@Entity("PHASEGROUP", { schema: "dbo" })
export class Phasegroup {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("varchar", { name: "GREIDS", nullable: true, length: 255 })
  greids: string | null;


  @OneToMany(() => Specification, (specification) => specification.phasegroup)
  specifications: Specification[];

  @OneToMany(() => Storetrade, (storetrade) => storetrade.phasegroup)
  storetrades: Storetrade[];




}
