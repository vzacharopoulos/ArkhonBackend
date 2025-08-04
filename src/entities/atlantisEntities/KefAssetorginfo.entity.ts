import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ASSETORGINFO_PK", ["recId", "comid"], { unique: true })
@ObjectType()
@Entity("KEF_ASSETORGINFO", { schema: "dbo" })
export class KefAssetorginfo {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "BRAID", nullable: true })
  braid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ASTID", nullable: true })
  astid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ASTCODE", nullable: true, length: 25 })
  astcode: string | null;

  @Field({ nullable: true })
  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SN", nullable: true, length: 50 })
  sn: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "DPTID", nullable: true })
  dptid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LOCATION", nullable: true, length: 50 })
  location: string | null;
}
