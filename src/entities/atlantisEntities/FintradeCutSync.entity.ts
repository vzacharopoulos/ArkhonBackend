import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FINTRADE_CUT_SYNC_1", ["id", "dsrid"], { unique: true })
@ObjectType()
@Entity("FINTRADE_CUT_SYNC", { schema: "dbo" })
export class FintradeCutSync {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("smallint", { name: "APPROVED", nullable: true })
  approved: number | null;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("int", { primary: true, name: "DSRID" })
  dsrid: number;

  @Column("varchar", { name: "DSRNUMBER", nullable: true, length: 30 })
  dsrnumber: string | null;

  @Column("datetime", { name: "FTRDATE", nullable: true })
  ftrdate: Date | null;

  @Column("smallint", { name: "ISCANCELED", nullable: true })
  iscanceled: number | null;

  @Column("varchar", { name: "TRADECODE", length: 30 })
  tradecode: string;

  @Column("int", { name: "FDTID", nullable: true })
  fdtid: number | null;

  @Column("datetime", { name: "LASTUPDATE", nullable: true })
  lastupdate: Date | null;

  @Column("smallint", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("float", { name: "WEIGHT", nullable: true, precision: 53 })
  weight: number | null;

  @Column("varchar", { name: "COILNO", nullable: true, length: 30 })
  coilno: string | null;

  @Column("text", { name: "Justification", nullable: true })
  justification: string | null;

  @Column("smallint", { name: "Istransfered", nullable: true })
  istransfered: number | null;

  @Column("smallint", { name: "TransferType", nullable: true })
  transferType: number | null;

  @Column("smallint", { name: "ARC_OMADAKOST", nullable: true })
  arcOmadakost: number | null;

  @Column("float", { name: "MWEIGHT", nullable: true, precision: 53 })
  mweight: number | null;

  @Column("float", { name: "MLENGTH", nullable: true, precision: 53 })
  mlength: number | null;
}
