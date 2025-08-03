import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Colorlistlines } from "./Colorlistlines.entity";

@Index("UNI_5862", ["comid", "codeid"], { unique: true })
@Index("UNI_5864", ["id"], { unique: true })
@ObjectType()
@Entity("COLORLIST", { schema: "dbo" })
export class Colorlist {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Column("smallint", { name: "ISMAIN", nullable: true, default: () => "(0)" })
  ismain: number | null;

  @OneToMany(() => Colorlistlines, (colorlistlines) => colorlistlines.link)
  colorlistlines: Colorlistlines[];
}
