import { Column, Entity, Index } from "typeorm";

@Index("PK_Speed", ["id"], { unique: true })
@Entity("Speed", { schema: "dbo" })
export class Speed {
  @Column("nchar", { primary: true, name: "id", length: 10 })
  id: string;

  @Column("nchar", { name: "thickness", nullable: true, length: 10 })
  thickness: string | null;

  @Column("decimal", { name: "sky3", nullable: true, precision: 18, scale: 1 })
  sky3: number | null;

  @Column("decimal", { name: "sky5", nullable: true, precision: 18, scale: 1 })
  sky5: number | null;

  @Column("decimal", {
    name: "horizon",
    nullable: true,
    precision: 18,
    scale: 1,
  })
  horizon: number | null;

  @Column("decimal", { name: "frigo", nullable: true, precision: 18, scale: 1 })
  frigo: number | null;

  @Column("decimal", { name: "roman", nullable: true, precision: 18, scale: 1 })
  roman: number | null;
}
