import { Field } from "@nestjs/graphql";
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

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", nullable: true, default: () => "1" })
  isactive: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISMAIN", nullable: true, default: () => "(0)" })
  ismain: number | null;

  @Field(() => [Colorlistlines], { nullable: true })
  @OneToMany(() => Colorlistlines, (colorlistlines) => colorlistlines.link)
  colorlistlines: Colorlistlines[];
}
