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
import { Costfolderest } from "./Costfolderest";

@Index("UNI_3458", ["id"], { unique: true })
@Index("UNI_3460", ["comid", "domaintype", "code"], { unique: true })
@Entity("COSTFOLDER", { schema: "dbo" })
export class Costfolder {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("smallint", { name: "DOMAINTYPE", unique: true })
  domaintype: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Column("datetime", { name: "UPDDATE", nullable: true })
  upddate: Date | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("datetime", { name: "CFODATE", nullable: true })
  cfodate: Date | null;

  @Column("int", { name: "CFTID", nullable: true })
  cftid: number | null;

  @Column("varchar", { name: "ACCMASKEST", nullable: true, length: 25 })
  accmaskest: string | null;

  @Column("datetime", { name: "ESTDATE", nullable: true })
  estdate: Date | null;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @ManyToOne(() => Company, (company) => company.costfolders)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Costfolderest, (costfolderest) => costfolderest.cfo)
  costfolderests: Costfolderest[];
}
