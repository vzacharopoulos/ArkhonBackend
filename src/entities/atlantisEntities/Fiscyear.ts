import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Fiscperiod } from "./Fiscperiod";
import { Company } from "./Company";

@Index("UNI_400", ["comid", "codeid"], { unique: true })
@Entity("FISCYEAR", { schema: "dbo" })
export class Fiscyear {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("datetime", { name: "BEGINDATE" })
  begindate: Date;

  @Column("datetime", { name: "ENDDATE" })
  enddate: Date;

  @Column("varchar", { name: "NAME", length: 25 })
  name: string;

  @Column("int", { name: "ISCLOSED", nullable: true, default: () => "0" })
  isclosed: number | null;

  @OneToMany(() => Fiscperiod, (fiscperiod) => fiscperiod.fiscyear)
  fiscperiods: Fiscperiod[];

  @ManyToOne(() => Company, (company) => company.fiscyears, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

}
