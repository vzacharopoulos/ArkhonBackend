import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FINTRADE_CUT_SYNC_1", ["id", "dsrid"], { unique: true })
@ObjectType()
@Entity("FINTRADE_CUT_SYNC", { schema: "dbo" })
export class FintradeCutSync {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "APPROVED", nullable: true })
  approved: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "DSRID" })
  dsrid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DSRNUMBER", nullable: true, length: 30 })
  dsrnumber: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FTRDATE", nullable: true })
  ftrdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISCANCELED", nullable: true })
  iscanceled: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", length: 30 })
  tradecode: string;

  @Field({ nullable: true })
  @Column("int", { name: "FDTID", nullable: true })
  fdtid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDATE", nullable: true })
  lastupdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "STATUS", nullable: true })
  status: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WEIGHT", nullable: true, precision: 53 })
  weight: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COILNO", nullable: true, length: 30 })
  coilno: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "Justification", nullable: true })
  justification: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "Istransfered", nullable: true })
  istransfered: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "TransferType", nullable: true })
  transferType: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ARC_OMADAKOST", nullable: true })
  arcOmadakost: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MWEIGHT", nullable: true, precision: 53 })
  mweight: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "MLENGTH", nullable: true, precision: 53 })
  mlength: number | null;
}
