import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Eurosystemhd } from "./Eurosystemhd";

@Index("UNI_18190", ["id"], { unique: true })
@Index("UNI_18202", ["code", "eshdid"], { unique: true })
@Entity("EUROSYSTEMDT", { schema: "dbo" })
export class Eurosystemdt {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "ESHDID", unique: true })
  eshdid: number;

  @Column("varchar", { name: "CODE", unique: true, length: 100 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("smallint", { name: "FLDTYPE" })
  fldtype: number;

  @Column("varchar", { name: "FLDTYPE2DATA", nullable: true, length: 255 })
  fldtype2Data: string | null;

  @Column("int", { name: "FLDTYPE3DATA", nullable: true })
  fldtype3Data: number | null;

  @Column("int", { name: "FLDTYPE4DATA", nullable: true })
  fldtype4Data: number | null;

  @Column("smallint", { name: "FLDCHECKVALUE", default: () => "(0)" })
  fldcheckvalue: number;

  @Column("smallint", { name: "DEALLOWED", default: () => "(0)" })
  deallowed: number;

  @Column("varchar", { name: "DEINSTRUCTIONS", nullable: true })
  deinstructions: string | null;

  @Column("smallint", { name: "CHECKTYPE", nullable: true })
  checktype: number | null;

  @Column("smallint", { name: "CHECKLENGTH", nullable: true })
  checklength: number | null;

  @ManyToOne(() => Eurosystemhd, (eurosystemhd) => eurosystemhd.eurosystemdts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ESHDID", referencedColumnName: "id" }])
  eshd: Eurosystemhd;
}
