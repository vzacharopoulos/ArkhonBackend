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
import { Accevtemplines } from "./Accevtemplines";

@Index("UNI_900", ["comid", "codeid"], { unique: true })
@Index("UNI_914", ["id"], { unique: true })
@Entity("ACCEVTEMPLATE", { schema: "dbo" })
export class Accevtemplate {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("smallint", { name: "PERIODICITY", default: () => "0" })
  periodicity: number;

  @Column("varchar", { name: "REPEATONDAYS", nullable: true, length: 255 })
  repeatondays: string | null;

  @Column("smallint", { name: "FASTENTRY", nullable: true, default: () => "0" })
  fastentry: number | null;

  @Column("varchar", { name: "FASTENTRYDATA", nullable: true })
  fastentrydata: string | null;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 30 })
  mydatacode: string | null;

  @Column("smallint", { name: "MYDATATYPE", nullable: true })
  mydatatype: number | null;

  @Column("smallint", { name: "SELFPRICING", nullable: true })
  selfpricing: number | null;

  @Column("varchar", { name: "CODEPREFIX", nullable: true, length: 10 })
  codeprefix: string | null;

  @ManyToOne(() => Acceventtype, (acceventtype) => acceventtype.accevtemplates)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @ManyToOne(() => Company, (company) => company.accevtemplates)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Accevtemplines, (accevtemplines) => accevtemplines.link)
  accevtemplines: Accevtemplines[];
}
