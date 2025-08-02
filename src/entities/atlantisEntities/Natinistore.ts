import { Column, Entity, Index, OneToMany } from "typeorm";
import { Natinistorecolorsize } from "./Natinistorecolorsize";

@Index(
  "UNI_5646_2",
  ["comid", "stoid", "fyeid", "fipid", "iteid", "bincode", "parid"],
  { unique: true }
)
@Entity("NATINISTORE", { schema: "dbo" })
export class Natinistore {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Column("int", { primary: true, name: "FIPID" })
  fipid: number;

  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("varchar", {
    primary: true,
    name: "BINCODE",
    length: 25,
    default: () => "'*'",
  })
  bincode: string;

  @Column("float", { name: "REMPRQTY", nullable: true, precision: 53 })
  remprqty: number | null;

  @Column("float", { name: "REMSECQTY", nullable: true, precision: 53 })
  remsecqty: number | null;

  @Column("float", { name: "NEWPRQTY", nullable: true, precision: 53 })
  newprqty: number | null;

  @Column("float", { name: "NEWSECQTY", nullable: true, precision: 53 })
  newsecqty: number | null;

  @Column("float", { name: "CONSUMPTIONQTY", nullable: true, precision: 53 })
  consumptionqty: number | null;

  @Column("datetime", { name: "INSDATE", nullable: true })
  insdate: Date | null;

  @Column("int", { primary: true, name: "PARID", default: () => "0" })
  parid: number;

  @Column("datetime", { name: "EXPDATE", nullable: true })
  expdate: Date | null;

  @OneToMany(
    () => Natinistorecolorsize,
    (natinistorecolorsize) => natinistorecolorsize.natinistore
  )
  natinistorecolorsizes: Natinistorecolorsize[];
}
