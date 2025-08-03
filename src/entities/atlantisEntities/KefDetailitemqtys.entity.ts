import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_DETAILITEMQTYS_PK", ["comid", "parid"], { unique: true })
@ObjectType()
@Entity("KEF_DETAILITEMQTYS", { schema: "dbo" })
export class KefDetailitemqtys {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "PARID" })
  parid: number;

  @Column("varchar", { name: "PARCODE", nullable: true, length: 25 })
  parcode: string | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("varchar", { name: "BINCODE", nullable: true, length: 25 })
  bincode: string | null;

  @Column("float", { name: "INITQTY1", nullable: true, precision: 53 })
  initqty1: number | null;

  @Column("float", { name: "INITQTY2", nullable: true, precision: 53 })
  initqty2: number | null;
}
