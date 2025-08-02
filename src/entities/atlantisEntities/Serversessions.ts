import { Column, Entity, Index } from "typeorm";

@Index("UNIX_1300", ["dblogindate"], {})
@Entity("SERVERSESSIONS", { schema: "dbo" })
export class Serversessions {
  @Column("int", { name: "DBSPID" })
  dbspid: number;

  @Column("datetime", { name: "DBLOGINDATE" })
  dblogindate: Date;

  @Column("int", { name: "USERID", nullable: true })
  userid: number | null;

  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("datetime", { name: "USERLOGINDATE" })
  userlogindate: Date;

  @Column("int", { name: "PROGID" })
  progid: number;

  @Column("varchar", { name: "WRKSTNAME", length: 50 })
  wrkstname: string;

  @Column("varchar", { name: "OSUSER", length: 50 })
  osuser: string;

  @Column("varchar", { name: "MCADDR", length: 30 })
  mcaddr: string;

  @Column("smallint", { name: "LOGINFLG", nullable: true })
  loginflg: number | null;

  @Column("varchar", { name: "VERSION", length: 30 })
  version: string;

  @Column("varchar", { name: "INFO", nullable: true })
  info: string | null;

  @Column("varchar", { name: "IPADDRESS", nullable: true, length: 40 })
  ipaddress: string | null;

  @Column("datetime", { name: "INITDBLOGINDATE", nullable: true })
  initdblogindate: Date | null;
}
