import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accclosetemplate } from "./Accclosetemplate";

@Index("UNI_5392", ["id"], { unique: true })
@Entity("ACCCLOSETEMPLATELINES", { schema: "dbo" })
export class Accclosetemplatelines {
  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "AECID" })
  aecid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "ACCFROM", length: 255 })
  accfrom: string;

  @Column("varchar", { name: "ACCTO", nullable: true, length: 255 })
  accto: string | null;

  @Column("int", { name: "ACCDEBIT", nullable: true })
  accdebit: number | null;

  @Column("int", { name: "ACCCREDIT", nullable: true })
  acccredit: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @ManyToOne(
    () => Accclosetemplate,
    (accclosetemplate) => accclosetemplate.accclosetemplatelines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Accclosetemplate;
}
