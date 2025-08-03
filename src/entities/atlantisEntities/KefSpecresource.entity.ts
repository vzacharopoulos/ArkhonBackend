import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_SPECRESOURCE_PK", ["spcid", "resid"], { unique: true })
@ObjectType()
@Entity("KEF_SPECRESOURCE", { schema: "dbo" })
export class KefSpecresource {
  @Column("int", { primary: true, name: "SPCID" })
  spcid: number;

  @Column("int", { primary: true, name: "RESID" })
  resid: number;

  @Column("varchar", { name: "SPCCODE", nullable: true, length: 25 })
  spccode: string | null;

  @Column("int", { name: "LINENUM", nullable: true })
  linenum: number | null;

  @Column("float", { name: "RESVALUE", nullable: true, precision: 53 })
  resvalue: number | null;

  @Column("int", { name: "RESKIND", nullable: true })
  reskind: number | null;

  @Column("int", { name: "CALCTYPE", nullable: true })
  calctype: number | null;

  @Column("int", { name: "MODIFIABLE", nullable: true })
  modifiable: number | null;
}
