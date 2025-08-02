import { Column, Entity, Index } from "typeorm";

@Index("UNI_2020", ["name"], { unique: true })
@Entity("WMSETTINGS", { schema: "dbo" })
export class Wmsettings {
  @Column("varchar", { primary: true, name: "NAME", length: 100 })
  name: string;

  @Column("datetime", { name: "UPDDATE", nullable: true })
  upddate: Date | null;

  @Column("int", { name: "UPDUSER", nullable: true })
  upduser: number | null;

  @Column("varbinary", { name: "SODATA", nullable: true })
  sodata: Buffer | null;
}
