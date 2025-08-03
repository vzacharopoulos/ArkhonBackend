import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_6060", ["tblno", "fldpos", "fldkind"], { unique: true })
@ObjectType()
@Entity("EXTRADBOBJECTS", { schema: "dbo" })
export class Extradbobjects {
  @Column("int", { primary: true, name: "TBLNO" })
  tblno: number;

  @Column("int", { primary: true, name: "FLDPOS" })
  fldpos: number;

  @Column("smallint", { primary: true, name: "FLDKIND" })
  fldkind: number;

  @Column("varchar", { name: "FLDNAME", nullable: true, length: 50 })
  fldname: string | null;

  @Column("varchar", { name: "TITLE", nullable: true, length: 50 })
  title: string | null;



  @Column("varchar", { name: "JOINFIELD", nullable: true, length: 50 })
  joinfield: string | null;

  @Column("varchar", { name: "JOINDATASET", nullable: true, length: 50 })
  joindataset: string | null;

  @Column("varchar", { name: "DISPLAYFIELD", nullable: true, length: 50 })
  displayfield: string | null;

  @Column("varchar", { name: "EXTRAWHERE", nullable: true, length: 100 })
  extrawhere: string | null;

  @Column("smallint", { name: "NULLABLE", nullable: true })
  nullable: number | null;

  @Column("int", { name: "DEFAULTVALUE", nullable: true })
  defaultvalue: number | null;

  @Column("int", { name: "FSIZE", nullable: true })
  fsize: number | null;

  @Column("int", { name: "FORDER", nullable: true, default: () => "0" })
  forder: number | null;

  @Column("smallint", { name: "FDECIMALS", nullable: true })
  fdecimals: number | null;
}
