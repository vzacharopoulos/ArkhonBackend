import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Chemicals", ["id"], { unique: true })
@Entity("Chemicals", { schema: "dbo" })
export class Chemicals {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "type", nullable: true, length: 50 })
  type: string | null;

  @Column("nvarchar", { name: "name", nullable: true, length: 250 })
  name: string | null;

  @Column("nvarchar", { name: "supplier", nullable: true, length: 50 })
  supplier: string | null;

  @Column("nvarchar", { name: "foamtype", nullable: true, length: 50 })
  foamtype: string | null;

  @Column("nvarchar", { name: "atlantiscodeOld", nullable: true, length: 50 })
  atlantiscodeOld: string | null;

  @Column("nvarchar", { name: "atlantiscode", nullable: true, length: 50 })
  atlantiscode: string | null;
}
