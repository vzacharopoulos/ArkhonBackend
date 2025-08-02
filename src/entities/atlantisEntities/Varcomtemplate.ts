import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";
import { Varcomtemplines } from "./Varcomtemplines";

@Index("UNI_6334", ["comid", "codeid"], { unique: true })
@Index("UNI_6336", ["id"], { unique: true })
@Entity("VARCOMTEMPLATE", { schema: "dbo" })
export class Varcomtemplate {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("smallint", { name: "SOURCETYPE", nullable: true })
  sourcetype: number | null;

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @ManyToOne(() => Company, (company) => company.varcomtemplates)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Varcomtemplines, (varcomtemplines) => varcomtemplines.link)
  varcomtemplines: Varcomtemplines[];
}
