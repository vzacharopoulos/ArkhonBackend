import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Glupdaccevent } from "./Glupdaccevent";
import { Company } from "./Company";

@Index("UNI_5366", ["comid", "domaintype", "codeid"], { unique: true })
@Index("UNI_5380", ["id"], { unique: true })
@Entity("GLUPDATESTRUCT", { schema: "dbo" })
export class Glupdatestruct {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "SHORTCUT", length: 10 })
  shortcut: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("smallint", { name: "DAYTOTALS", default: () => "0" })
  daytotals: number;

  @OneToMany(() => Glupdaccevent, (glupdaccevent) => glupdaccevent.link)
  glupdaccevents: Glupdaccevent[];

  @ManyToOne(() => Company, (company) => company.glupdatestructs)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
