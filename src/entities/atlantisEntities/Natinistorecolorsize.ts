import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Natinistore } from "./Natinistore";

@Index(
  "UNI_5900_2",
  [
    "comid",
    "stoid",
    "fyeid",
    "fipid",
    "iteid",
    "colorcode",
    "bincode",
    "parid",
  ],
  { unique: true }
)
@Entity("NATINISTORECOLORSIZE", { schema: "dbo" })
export class Natinistorecolorsize {
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

  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Column("varchar", {
    primary: true,
    name: "BINCODE",
    length: 25,
    default: () => "'*'",
  })
  bincode: string;

  @Column("float", { name: "SIZE1", nullable: true, precision: 53 })
  size1: number | null;

  @Column("float", { name: "SIZE2", nullable: true, precision: 53 })
  size2: number | null;

  @Column("float", { name: "SIZE3", nullable: true, precision: 53 })
  size3: number | null;

  @Column("float", { name: "SIZE4", nullable: true, precision: 53 })
  size4: number | null;

  @Column("float", { name: "SIZE5", nullable: true, precision: 53 })
  size5: number | null;

  @Column("float", { name: "SIZE6", nullable: true, precision: 53 })
  size6: number | null;

  @Column("float", { name: "SIZE7", nullable: true, precision: 53 })
  size7: number | null;

  @Column("float", { name: "SIZE8", nullable: true, precision: 53 })
  size8: number | null;

  @Column("float", { name: "SIZE9", nullable: true, precision: 53 })
  size9: number | null;

  @Column("float", { name: "SIZE10", nullable: true, precision: 53 })
  size10: number | null;

  @Column("float", { name: "SIZE11", nullable: true, precision: 53 })
  size11: number | null;

  @Column("float", { name: "SIZE12", nullable: true, precision: 53 })
  size12: number | null;

  @Column("float", { name: "SIZE13", nullable: true, precision: 53 })
  size13: number | null;

  @Column("float", { name: "SIZE14", nullable: true, precision: 53 })
  size14: number | null;

  @Column("float", { name: "SIZE15", nullable: true, precision: 53 })
  size15: number | null;

  @Column("float", { name: "SIZE16", nullable: true, precision: 53 })
  size16: number | null;

  @Column("float", { name: "SIZE17", nullable: true, precision: 53 })
  size17: number | null;

  @Column("float", { name: "SIZE18", nullable: true, precision: 53 })
  size18: number | null;

  @Column("float", { name: "SIZE19", nullable: true, precision: 53 })
  size19: number | null;

  @Column("float", { name: "SIZE20", nullable: true, precision: 53 })
  size20: number | null;

  @Column("float", { name: "REMSIZE1", nullable: true, precision: 53 })
  remsize1: number | null;

  @Column("float", { name: "REMSIZE2", nullable: true, precision: 53 })
  remsize2: number | null;

  @Column("float", { name: "REMSIZE3", nullable: true, precision: 53 })
  remsize3: number | null;

  @Column("float", { name: "REMSIZE4", nullable: true, precision: 53 })
  remsize4: number | null;

  @Column("float", { name: "REMSIZE5", nullable: true, precision: 53 })
  remsize5: number | null;

  @Column("float", { name: "REMSIZE6", nullable: true, precision: 53 })
  remsize6: number | null;

  @Column("float", { name: "REMSIZE7", nullable: true, precision: 53 })
  remsize7: number | null;

  @Column("float", { name: "REMSIZE8", nullable: true, precision: 53 })
  remsize8: number | null;

  @Column("float", { name: "REMSIZE9", nullable: true, precision: 53 })
  remsize9: number | null;

  @Column("float", { name: "REMSIZE10", nullable: true, precision: 53 })
  remsize10: number | null;

  @Column("float", { name: "REMSIZE11", nullable: true, precision: 53 })
  remsize11: number | null;

  @Column("float", { name: "REMSIZE12", nullable: true, precision: 53 })
  remsize12: number | null;

  @Column("float", { name: "REMSIZE13", nullable: true, precision: 53 })
  remsize13: number | null;

  @Column("float", { name: "REMSIZE14", nullable: true, precision: 53 })
  remsize14: number | null;

  @Column("float", { name: "REMSIZE15", nullable: true, precision: 53 })
  remsize15: number | null;

  @Column("float", { name: "REMSIZE16", nullable: true, precision: 53 })
  remsize16: number | null;

  @Column("float", { name: "REMSIZE17", nullable: true, precision: 53 })
  remsize17: number | null;

  @Column("float", { name: "REMSIZE18", nullable: true, precision: 53 })
  remsize18: number | null;

  @Column("float", { name: "REMSIZE19", nullable: true, precision: 53 })
  remsize19: number | null;

  @Column("float", { name: "REMSIZE20", nullable: true, precision: 53 })
  remsize20: number | null;

  @Column("int", { primary: true, name: "PARID", default: () => "0" })
  parid: number;

  @ManyToOne(
    () => Natinistore,
    (natinistore) => natinistore.natinistorecolorsizes,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOID", referencedColumnName: "stoid" },
    { name: "FYEID", referencedColumnName: "fyeid" },
    { name: "FIPID", referencedColumnName: "fipid" },
    { name: "ITEID", referencedColumnName: "iteid" },
    { name: "BINCODE", referencedColumnName: "bincode" },
    { name: "PARID", referencedColumnName: "parid" },
  ])
  natinistore: Natinistore;
}
