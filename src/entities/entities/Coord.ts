import { Column, Entity } from "typeorm";

@Entity("coord", { schema: "dbo" })
export class Coord {
  @Column("nchar", { name: "id", nullable: true, length: 10 })
  id: string | null;

  @Column("nchar", { name: "Longitude", nullable: true, length: 10 })
  longitude: string | null;

  @Column("nchar", { name: "Latitude", nullable: true, length: 10 })
  latitude: string | null;

  @Column("int", { name: "val", nullable: true })
  val: number | null;

  @Column("nvarchar", { name: "coor", length: 23 })
  coor: string;
}
