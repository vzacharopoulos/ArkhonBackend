import { Column, Entity, Index } from "typeorm";

@Index("UNI_5800", ["comid", "domaintype", "codeid"], { unique: true })
@Entity("COSTFOLDERTYPE", { schema: "dbo" })
export class Costfoldertype {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("int", { name: "DSRIDEST", nullable: true })
  dsridest: number | null;

  @Column("int", { name: "DSRIDCLOSE", nullable: true })
  dsridclose: number | null;

  @Column("int", { name: "DSRIDDIFF", nullable: true })
  dsriddiff: number | null;

  @Column("int", { name: "GUSIDEST", nullable: true })
  gusidest: number | null;

  @Column("int", { name: "GUSIDCLOSE", nullable: true })
  gusidclose: number | null;

  @Column("smallint", { name: "ITEUPDMODE", default: () => "0" })
  iteupdmode: number;

  @Column("smallint", {
    name: "ITEGROUPMODE",
    nullable: true,
    default: () => "1",
  })
  itegroupmode: number | null;
}
