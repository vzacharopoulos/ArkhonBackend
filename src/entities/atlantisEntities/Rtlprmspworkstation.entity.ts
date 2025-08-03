import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5950", ["wstid", "comid"], { unique: true })
@ObjectType()
@Entity("RTLPRMSPWORKSTATION", { schema: "dbo" })
export class Rtlprmspworkstation {
  @Column("int", { primary: true, name: "WSTID" })
  wstid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { name: "CSHID", nullable: true })
  cshid: number | null;

  @Column("int", { name: "RTLDSRID", nullable: true })
  rtldsrid: number | null;

  @Column("int", { name: "RTLORDERDSRID", nullable: true })
  rtlorderdsrid: number | null;

  @Column("int", { name: "RTLPOSID", nullable: true })
  rtlposid: number | null;

  @Column("int", { name: "CUSID", nullable: true })
  cusid: number | null;
}
