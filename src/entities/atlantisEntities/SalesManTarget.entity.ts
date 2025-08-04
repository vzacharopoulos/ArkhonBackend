import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_SalesManTarget", ["id"], { unique: true })
@ObjectType()
@Entity("SalesManTarget", { schema: "dbo" })
export class SalesManTarget {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "year", nullable: true })
  year: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "customerID", nullable: true })
  customerId: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "tubes_target", nullable: true })
  tubesTarget: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "panel_target", nullable: true })
  panelTarget: number | null;

  @Field({ nullable: true })
  @Column("nchar", { name: "coil_target", nullable: true, length: 10 })
  coilTarget: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;
}
