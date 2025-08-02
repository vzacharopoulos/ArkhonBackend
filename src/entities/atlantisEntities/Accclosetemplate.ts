import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Acceventtype } from "./Acceventtype";
import { Company } from "./Company";
import { Accclosetemplatelines } from "./Accclosetemplatelines";

@Index("UNI_5390", ["comid", "codeid"], { unique: true })
@Index("UNI_5396", ["id"], { unique: true })
@Entity("ACCCLOSETEMPLATE", { schema: "dbo" })
export class Accclosetemplate {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("smallint", { name: "ISTD", default: () => "0" })
  istd: number;

  @ManyToOne(
    () => Acceventtype,
    (acceventtype) => acceventtype.accclosetemplates
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @ManyToOne(() => Company, (company) => company.accclosetemplates)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(
    () => Accclosetemplatelines,
    (accclosetemplatelines) => accclosetemplatelines.link
  )
  accclosetemplatelines: Accclosetemplatelines[];
}
