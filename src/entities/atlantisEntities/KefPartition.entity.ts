import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_PARTITION_PK", ["comid", "recId"], { unique: true })
@ObjectType()
@Entity("KEF_PARTITION", { schema: "dbo" })
export class KefPartition {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("datetime", { name: "INPUTDATE", nullable: true })
  inputdate: Date | null;

  @Column("datetime", { name: "EXPIREDATE", nullable: true })
  expiredate: Date | null;

  @Column("float", { name: "INITQTY1", nullable: true, precision: 53 })
  initqty1: number | null;

  @Column("float", { name: "INITQTY2", nullable: true, precision: 53 })
  initqty2: number | null;
}
