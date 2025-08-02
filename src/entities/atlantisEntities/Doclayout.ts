import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_5706", ["id"], { unique: true })
@Index("UNI_6410", ["comid", "codeid", "domaintype", "usrid", "grpid"], {
  unique: true,
})
@Entity("DOCLAYOUT", { schema: "dbo" })
export class Doclayout {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("int", { name: "CODEID", unique: true })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("smallint", { name: "DOMAINTYPE", unique: true })
  domaintype: number;

  @Column("varbinary", { name: "DATA", nullable: true })
  data: Buffer | null;

  @Column("int", {
    name: "USRID",
    nullable: true,
    unique: true,
    default: () => "0",
  })
  usrid: number | null;

  @Column("int", {
    name: "GRPID",
    nullable: true,
    unique: true,
    default: () => "0",
  })
  grpid: number | null;

  @Column("varchar", { name: "ORDERFLD", nullable: true, length: 50 })
  orderfld: string | null;
}
