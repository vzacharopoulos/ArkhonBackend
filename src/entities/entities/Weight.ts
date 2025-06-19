import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Weight", { schema: "dbo" })
export class Weight {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("int", { name: "weight", nullable: true })
  weight: number | null;

  @Column("int", { name: "weight1", nullable: true })
  weight1: number | null;

  @Column("int", { name: "weight2", nullable: true })
  weight2: number | null;

  @Column("int", { name: "fd", nullable: true })
  fd: number | null;

  @Column("int", { name: "xd", nullable: true })
  xd: number | null;

  @Column("int", { name: "yd", nullable: true })
  yd: number | null;

  @Column("int", { name: "thickclass", nullable: true })
  thickclass: number | null;

  @Column("int", { name: "thickness", nullable: true })
  thickness: number | null;

  @Column("decimal", {
    name: "length",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  length: number | null;

  @Column("datetime", { name: "timestamp_" })
  timestamp: Date;

  @Column("int", { name: "printed", nullable: true, default: () => "(0)" })
  printed: number | null;

  @Column("varchar", { name: "steelgrade", length: 8 })
  steelgrade: string;

  @Column("varchar", { name: "nomthickness", nullable: true, length: 4 })
  nomthickness: string | null;

  @Column("int", { name: "d2112", nullable: true })
  d2112: number | null;

  @Column("int", { name: "d2114", nullable: true })
  d2114: number | null;

  @Column("nvarchar", { name: "d410", nullable: true, length: 50 })
  d410: string | null;

  @Column("nvarchar", { name: "d411", nullable: true, length: 50 })
  d411: string | null;

  @Column("nvarchar", { name: "d412", nullable: true, length: 50 })
  d412: string | null;

  @Column("nvarchar", { name: "d413", nullable: true, length: 50 })
  d413: string | null;

  @Column("nvarchar", { name: "d414", nullable: true, length: 50 })
  d414: string | null;

  @Column("nvarchar", { name: "d415", nullable: true, length: 50 })
  d415: string | null;

  @Column("nvarchar", { name: "d416", nullable: true, length: 50 })
  d416: string | null;

  @Column("nvarchar", { name: "d417", nullable: true, length: 50 })
  d417: string | null;

  @Column("nvarchar", { name: "d418", nullable: true, length: 50 })
  d418: string | null;

  @Column("nvarchar", { name: "d419", nullable: true, length: 50 })
  d419: string | null;

  @Column("nvarchar", { name: "d420", nullable: true, length: 50 })
  d420: string | null;

  @Column("nvarchar", { name: "d421", nullable: true, length: 50 })
  d421: string | null;

  @Column("nvarchar", { name: "d422", nullable: true, length: 50 })
  d422: string | null;

  @Column("nvarchar", { name: "d423", nullable: true, length: 50 })
  d423: string | null;

  @Column("nvarchar", { name: "d424", nullable: true, length: 50 })
  d424: string | null;

  @Column("nvarchar", { name: "d425", nullable: true, length: 50 })
  d425: string | null;

  @Column("nvarchar", { name: "d426", nullable: true, length: 50 })
  d426: string | null;

  @Column("nvarchar", { name: "d427", nullable: true, length: 50 })
  d427: string | null;

  @Column("nvarchar", { name: "d428", nullable: true, length: 50 })
  d428: string | null;

  @Column("nvarchar", { name: "d429", nullable: true, length: 50 })
  d429: string | null;

  @Column("nvarchar", { name: "comment", length: 1000 })
  comment: string;

  @Column("varchar", { name: "galv", length: 3 })
  galv: string;

  @Column("nvarchar", { name: "d450", nullable: true, length: 50 })
  d450: string | null;

  @Column("nvarchar", { name: "d451", nullable: true, length: 50 })
  d451: string | null;

  @Column("nvarchar", { name: "d452", nullable: true, length: 50 })
  d452: string | null;

  @Column("nvarchar", { name: "d453", nullable: true, length: 50 })
  d453: string | null;

  @Column("nvarchar", { name: "d454", nullable: true, length: 50 })
  d454: string | null;

  @Column("nvarchar", { name: "d455", nullable: true, length: 50 })
  d455: string | null;

  @Column("nvarchar", { name: "d456", nullable: true, length: 50 })
  d456: string | null;

  @Column("nvarchar", { name: "d457", nullable: true, length: 50 })
  d457: string | null;

  @Column("nvarchar", { name: "d458", nullable: true, length: 50 })
  d458: string | null;

  @Column("nvarchar", { name: "d459", nullable: true, length: 50 })
  d459: string | null;

  @Column("nvarchar", { name: "d460", nullable: true, length: 50 })
  d460: string | null;

  @Column("nvarchar", { name: "d461", nullable: true, length: 50 })
  d461: string | null;

  @Column("nvarchar", { name: "d462", nullable: true, length: 50 })
  d462: string | null;

  @Column("nvarchar", { name: "d463", nullable: true, length: 50 })
  d463: string | null;

  @Column("nvarchar", { name: "d464", nullable: true, length: 50 })
  d464: string | null;

  @Column("nvarchar", { name: "d465", nullable: true, length: 50 })
  d465: string | null;

  @Column("nvarchar", { name: "d466", nullable: true, length: 50 })
  d466: string | null;

  @Column("nvarchar", { name: "d467", nullable: true, length: 50 })
  d467: string | null;

  @Column("nvarchar", { name: "d468", nullable: true, length: 50 })
  d468: string | null;

  @Column("nvarchar", { name: "d469", nullable: true, length: 50 })
  d469: string | null;

  @Column("nvarchar", { name: "customer", length: 1000 })
  customer: string;

  @Column("varchar", { name: "subtype", length: 9 })
  subtype: string;

  @Column("int", { name: "ce" })
  ce: number;

  @Column("nvarchar", { name: "d500", nullable: true, length: 50 })
  d500: string | null;

  @Column("nvarchar", { name: "d501", nullable: true, length: 50 })
  d501: string | null;

  @Column("nvarchar", { name: "d502", nullable: true, length: 50 })
  d502: string | null;

  @Column("nvarchar", { name: "d503", nullable: true, length: 50 })
  d503: string | null;

  @Column("nvarchar", { name: "d504", nullable: true, length: 50 })
  d504: string | null;

  @Column("nvarchar", { name: "d505", nullable: true, length: 50 })
  d505: string | null;

  @Column("nvarchar", { name: "d506", nullable: true, length: 50 })
  d506: string | null;

  @Column("nvarchar", { name: "d507", nullable: true, length: 50 })
  d507: string | null;

  @Column("nvarchar", { name: "d508", nullable: true, length: 50 })
  d508: string | null;

  @Column("nvarchar", { name: "d509", nullable: true, length: 50 })
  d509: string | null;

  @Column("nvarchar", { name: "d510", nullable: true, length: 50 })
  d510: string | null;

  @Column("nvarchar", { name: "d511", nullable: true, length: 50 })
  d511: string | null;

  @Column("nvarchar", { name: "d512", nullable: true, length: 50 })
  d512: string | null;

  @Column("nvarchar", { name: "d513", nullable: true, length: 50 })
  d513: string | null;

  @Column("nvarchar", { name: "d514", nullable: true, length: 50 })
  d514: string | null;

  @Column("nvarchar", { name: "d515", nullable: true, length: 50 })
  d515: string | null;

  @Column("nvarchar", { name: "d516", nullable: true, length: 50 })
  d516: string | null;

  @Column("nvarchar", { name: "d517", nullable: true, length: 50 })
  d517: string | null;

  @Column("nvarchar", { name: "d518", nullable: true, length: 50 })
  d518: string | null;

  @Column("nvarchar", { name: "d519", nullable: true, length: 50 })
  d519: string | null;

  @Column("nvarchar", { name: "pcomment", length: 1000 })
  pcomment: string;

  @Column("int", { name: "d100", nullable: true })
  d100: number | null;
}
