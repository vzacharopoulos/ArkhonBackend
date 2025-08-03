import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SalesManTarget", ["id"], { unique: true })
@ObjectType()
@Entity("SalesManTarget", { schema: "dbo" })
export class SalesManTarget {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "year", nullable: true })
  year: number | null;

  @Column("int", { name: "customerID", nullable: true })
  customerId: number | null;

  @Column("int", { name: "tubes_target", nullable: true })
  tubesTarget: number | null;

  @Column("int", { name: "panel_target", nullable: true })
  panelTarget: number | null;

  @Column("nchar", { name: "coil_target", nullable: true, length: 10 })
  coilTarget: string | null;

  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;
}
