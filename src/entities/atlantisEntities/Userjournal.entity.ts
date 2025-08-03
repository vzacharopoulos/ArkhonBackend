import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company.entity";
import { Userjournallines } from "./Userjournallines.entity";

@Index("UNI_1000", ["comid", "codeid"], { unique: true })
@Index("UNI_1018", ["id"], { unique: true })
@ObjectType()
@Entity("USERJOURNAL", { schema: "dbo" })
export class Userjournal {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Column("varchar", { name: "TITLE", length: 255 })
  title: string;

  @ManyToOne(() => Company, (company) => company.userjournals)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(
    () => Userjournallines,
    (userjournallines) => userjournallines.link
  )
  userjournallines: Userjournallines[];
}
