import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Myf } from "./Myf.entity";

@Index("UNI_1440", ["id"], { unique: true })
@ObjectType()
@Entity("MYF_DATA", { schema: "dbo" })
export class MyfData {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("smallint", { name: "VALTYPE" })
  valtype: number;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Column("float", { name: "MYFVAL", precision: 53 })
  myfval: number;

  @Column("float", { name: "MYFTAXVAL", nullable: true, precision: 53 })
  myftaxval: number | null;

  @Column("int", { name: "MYFQTY", nullable: true })
  myfqty: number | null;

  @Column("smallint", { name: "MYFNOTOBJECT", default: () => "(0)" })
  myfnotobject: number;

  @Column("smallint", { name: "MYFNOTE", default: () => "(0)" })
  myfnote: number;

  @Column("datetime", { name: "MYFDATE" })
  myfdate: Date;

  @Column("varchar", { name: "MYFCASHREGID", nullable: true, length: 50 })
  myfcashregid: string | null;

  @Column("int", { name: "CURID" })
  curid: number;

  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Column("smallint", { name: "PERDOMAIN", nullable: true })
  perdomain: number | null;

  @Column("int", { name: "FROMCOMID", nullable: true })
  fromcomid: number | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @ManyToOne(() => Myf, (myf) => myf.myfData, { onDelete: "CASCADE" })
  @JoinColumn([{ name: "MYFID", referencedColumnName: "id" }])
  myf: Myf;
}
