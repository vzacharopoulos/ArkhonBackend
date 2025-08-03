import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_6394", ["id"], { unique: true })
@ObjectType()
@Entity("COSTACCPARAMS", { schema: "dbo" })
export class Costaccparams {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "LINENUM", nullable: true })
  linenum: number | null;

  @Column("int", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Column("varchar", { name: "TOREADDSRIDS", nullable: true, length: 255 })
  toreaddsrids: string | null;

  @Column("int", { name: "TOMAKEDSRID", nullable: true })
  tomakedsrid: number | null;

  @Column("int", { name: "COMPINGRDSRID", nullable: true })
  compingrdsrid: number | null;

  @Column("int", { name: "DECOMPINGRDSRID", nullable: true })
  decompingrdsrid: number | null;

  @Column("varchar", {
    name: "PRECOSTCUSTTRNTYPES",
    nullable: true,
    length: 255,
  })
  precostcusttrntypes: string | null;

  @Column("varchar", {
    name: "PRECOSTSUPTRNTYPES",
    nullable: true,
    length: 255,
  })
  precostsuptrntypes: string | null;

  @Column("smallint", {
    name: "COSTACCCHECKMODE",
    nullable: true,
    default: () => "0",
  })
  costacccheckmode: number | null;
}
