import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accdiffmodellines } from "./Accdiffmodellines";

@Index("UNI_SX15466", ["id"], { unique: true })
@Index("UNI_SX15488", ["code"], { unique: true })
@Entity("ACCDIFFMODEL", { schema: "dbo" })
export class Accdiffmodel {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("varchar", { name: "DESCRIPTION", length: 100 })
  description: string;

  @Column("int", { name: "DIFFGROUP", nullable: true })
  diffgroup: number | null;

  @Column("int", { name: "EMPLOYEENUM", nullable: true })
  employeenum: number | null;

  @Column("int", { name: "MOBILENUM", nullable: true })
  mobilenum: number | null;

  @Column("smallint", { name: "AKIND", default: () => "(1)" })
  akind: number;

  @OneToMany(
    () => Accdiffmodellines,
    (accdiffmodellines) => accdiffmodellines.accdiffmodel
  )
  accdiffmodellines: Accdiffmodellines[];


}
