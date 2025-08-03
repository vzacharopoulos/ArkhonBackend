import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("UNIX_1047", ["evdate", "userid"], {})
@Index("UNIX_1048", ["comid", "moduleid", "keyid", "evdate"], {})
@ObjectType()
@Entity("UNIAUDIT", { schema: "dbo" })
export class Uniaudit {
  @PrimaryColumn("datetime", { name: "EVDATE" })
  evdate: Date | null;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("int", { name: "USERID", nullable: true })
  userid: number | null;

  @Column("int", { name: "MODULEID", nullable: true })
  moduleid: number | null;

  @Column("int", { name: "KEYID", nullable: true })
  keyid: number | null;

  @Column("int", { name: "OPERID", nullable: true })
  operid: number | null;

  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Column("int", { name: "BATCHID", nullable: true })
  batchid: number | null;

  @Column("varchar", { name: "UPDATEDFIELDS", nullable: true, length: 255 })
  updatedfields: string | null;

  @Column("varchar", { name: "LUPDATEDFIELDS", nullable: true, length: 255 })
  lupdatedfields: string | null;

  @Column("int", { name: "WEBUSERID", nullable: true })
  webuserid: number | null;

  @Column("varchar", { name: "KEYVALUES", nullable: true, length: 255 })
  keyvalues: string | null;

  @Column("datetime", { name: "DOCDATE", nullable: true })
  docdate: Date | null;
}
