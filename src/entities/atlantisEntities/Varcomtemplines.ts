import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Varcomtrades } from "./Varcomtrades";
import { Varcomtemplate } from "./Varcomtemplate";

@Index("UNI_6340", ["id"], { unique: true })
@Entity("VARCOMTEMPLINES", { schema: "dbo" })
export class Varcomtemplines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "CALCFORMULA", nullable: true, length: 255 })
  calcformula: string | null;

  @ManyToOne(() => Varcomtrades, (varcomtrades) => varcomtrades.varcomtemplines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "VCTID", referencedColumnName: "codeid" },
  ])
  varcomtrades: Varcomtrades;

  @ManyToOne(
    () => Varcomtemplate,
    (varcomtemplate) => varcomtemplate.varcomtemplines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Varcomtemplate;
}
