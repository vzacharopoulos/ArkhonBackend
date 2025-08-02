import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mydataheader } from "./Mydataheader";

@Index("UNI_18212", ["id"], { unique: true })
@Index("UNIX_1142", ["mydataheaderid"], {})
@Entity("MYDATAEXPLINES", { schema: "dbo" })
export class Mydataexplines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "MYDATAHEADERID" })
  mydataheaderid: number;

  @Column("int", { name: "LINENUMBER", nullable: true })
  linenumber: number | null;

  @Column("smallint", { name: "EXPTYPE", nullable: true })
  exptype: number | null;

  @Column("smallint", { name: "MYDATAVPRC", nullable: true })
  mydatavprc: number | null;

  @Column("float", { name: "EXPVALUE", nullable: true, precision: 53 })
  expvalue: number | null;

  @Column("float", {
    name: "DEDUCTIONSPERCENTAGE",
    nullable: true,
    precision: 53,
  })
  deductionspercentage: number | null;

  @Column("varchar", { name: "LINECOMMENTS", nullable: true, length: 128 })
  linecomments: string | null;

  @ManyToOne(
    () => Mydataheader,
    (mydataheader) => mydataheader.mydataexplines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "MYDATAHEADERID", referencedColumnName: "id" }])
  mydataheader: Mydataheader;
}
