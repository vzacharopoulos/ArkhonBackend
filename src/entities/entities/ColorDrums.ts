import { Column, Entity, Index } from "typeorm";

@Index("PK_Color_Drums", ["id"], { unique: true })
@Entity("Color_Drums", { schema: "dbo" })
export class ColorDrums {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("nvarchar", { name: "batchNo", nullable: true })
  batchNo: string | null;

  @Column("int", { name: "packageID", nullable: true })
  packageId: number | null;

  @Column("nvarchar", { name: "drumNo" })
  drumNo: string;

  @Column("nvarchar", { name: "referenceNo", nullable: true })
  referenceNo: string | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("decimal", {
    name: "init_weight",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  initWeight: number | null;

  @Column("decimal", {
    name: "curr_weight",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  currWeight: number | null;
}
