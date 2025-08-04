import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_6366", ["id"], { unique: true })
@ObjectType()
@Entity("ATLCALENDAR", { schema: "dbo" })
export class Atlcalendar {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALKIND", default: () => "(0)" })
  calkind: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALDAY", nullable: true })
  calday: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "CALMONTH", nullable: true })
  calmonth: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "PASXADIFFDAYS", nullable: true })
  pasxadiffdays: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FID", nullable: true })
  fid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FACTUALDATE", nullable: true })
  factualdate: Date | null;
}
