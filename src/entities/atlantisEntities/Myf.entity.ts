import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MyfData } from "./MyfData.entity";

@Index("UNI_1438", ["id"], { unique: true })
@ObjectType()
@Entity("MYF", { schema: "dbo" })
export class Myf {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "FYEAR" })
  fyear: number;

  @Column("smallint", { name: "FMONTH" })
  fmonth: number;

  @Column("varchar", { name: "DESCR", length: 100 })
  descr: string;

  @Column("varchar", { name: "AFM", length: 15 })
  afm: string;

  @Column("varchar", { name: "BRANHNO", nullable: true, length: 10 })
  branhno: string | null;

  @Column("smallint", { name: "VALTYPE", default: () => "(0)" })
  valtype: number;

  @Column("smallint", { name: "AKIND", default: () => "(0)" })
  akind: number;

  @Column("smallint", { name: "ISLOCKED", default: () => "(0)" })
  islocked: number;

  @Column("datetime", { name: "FROMDATE" })
  fromdate: Date;

  @Column("datetime", { name: "TODATE" })
  todate: Date;

  @Column("datetime", { name: "GIVEDATE", nullable: true })
  givedate: Date | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("varchar", { name: "GSISRESPONSE", nullable: true })
  gsisresponse: string | null;

  @Column("int", { name: "GSISRESPONSEID", nullable: true })
  gsisresponseid: number | null;

  @Column("int", { name: "AA", nullable: true })
  aa: number | null;

  @OneToMany(() => MyfData, (myfData) => myfData.myf)
  myfData: MyfData[];
}
