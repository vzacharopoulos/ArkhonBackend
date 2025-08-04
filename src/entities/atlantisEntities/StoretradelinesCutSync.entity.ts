import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_STORETRADELINES_CUT_SYNC", ["id"], { unique: true })
@ObjectType()
@Entity("STORETRADELINES_CUT_SYNC", { schema: "dbo" })
export class StoretradelinesCutSync {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WEIGHT", nullable: true, precision: 53 })
  weight: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COILNO", nullable: true, length: 50 })
  coilno: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "isCanceled", nullable: true })
  isCanceled: number | null;

  @Field({ nullable: true })
  @Column("text", { name: "Justification", nullable: true })
  justification: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "Linetype", nullable: true })
  linetype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PCCOEF", nullable: true })
  pccoef: number | null;
}
