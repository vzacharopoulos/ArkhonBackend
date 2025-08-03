import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_10", ["comid", "braid", "fyeid", "teccid"], { unique: true })
@ObjectType()
@Entity("WORKCALENDAR", { schema: "dbo" })
export class Workcalendar {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "BRAID", default: () => "0" })
  braid: number;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("varchar", { name: "WORKPLAN", nullable: true, length: 255 })
  workplan: string | null;

  @Column("int", { name: "TECID", nullable: true })
  tecid: number | null;

  @Column("smallint", { name: "ISTECHNICAL", default: () => "0" })
  istechnical: number;


  @Column("int", { primary: true, name: "TECCID", default: () => "0" })
  teccid: number;
}
