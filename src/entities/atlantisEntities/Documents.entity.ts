import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Docrel } from "./Docrel.entity";

@Index("UNI_5724", ["id"], { unique: true })
@Index("UNIX_1046", ["masterid"], {})
@ObjectType()
@Entity("DOCUMENTS", { schema: "dbo" })
export class Documents {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("varchar", { name: "FILENAME", nullable: true, length: 255 })
  filename: string | null;

  @Column("int", { name: "MASTERID", nullable: true })
  masterid: number | null;

  @Column("varchar", { name: "DOCTYPE", nullable: true, length: 5 })
  doctype: string | null;

  @Column("int", { name: "DCTID", nullable: true })
  dctid: number | null;

  @Column("smallint", { name: "ISFOLDER", nullable: true, default: () => "0" })
  isfolder: number | null;



  @Column("datetime", { name: "DOCDATE", nullable: true })
  docdate: Date | null;

  @Column("int", { name: "LINENUM", nullable: true })
  linenum: number | null;

  @Column("smallint", { name: "HASIMAGE", nullable: true, default: () => "0" })
  hasimage: number | null;

  @Column("smallint", { name: "ISZIP", nullable: true, default: () => "0" })
  iszip: number | null;

  @Column("datetime", { name: "UPLOADDATE", nullable: true })
  uploaddate: Date | null;

  @Column("varchar", { name: "UPLOADDESCR", nullable: true, length: 50 })
  uploaddescr: string | null;

  @OneToMany(() => Docrel, (docrel) => docrel.doc)
  docrels: Docrel[];
}
