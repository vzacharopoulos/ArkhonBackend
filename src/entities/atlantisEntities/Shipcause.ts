import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Company } from "./Company";
import { Storetrade } from "./Storetrade";

@Index("UNI_5318", ["comid", "codeid"], { unique: true })
@Entity("SHIPCAUSE", { schema: "dbo" })
export class Shipcause {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("int", { name: "FUELCAUSE", nullable: true })
  fuelcause: number | null;

  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @ManyToOne(() => Company, (company) => company.shipcauses)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Storetrade, (storetrade) => storetrade.shipcause)
  storetrades: Storetrade[];
}
