import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_5850", ["id"], { unique: true })
@ObjectType()
@Entity("KEPYO", { schema: "dbo" })
export class Kepyo {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("smallint", { name: "RECTYPE" })
  rectype: number;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Column("varchar", { name: "INFO", length: 255 })
  info: string;

  @Column("smallint", { name: "ISNEG" })
  isneg: number;

  @Column("smallint", { name: "KEPYOSTATUS", nullable: true })
  kepyostatus: number | null;

  @Column("float", { name: "KEPYOVAL", nullable: true, precision: 53 })
  kepyoval: number | null;

  @Column("int", { name: "KEPYOQTY", nullable: true })
  kepyoqty: number | null;

  @Column("smallint", { name: "WRONGAFM", nullable: true, default: () => "0" })
  wrongafm: number | null;

  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Column("int", { name: "CURID", nullable: true })
  curid: number | null;

  @Column("float", { name: "EXKEPYOVAL", nullable: true, precision: 53 })
  exkepyoval: number | null;

  @Column("int", { name: "EXKEPYOQTY", nullable: true })
  exkepyoqty: number | null;

  @Column("smallint", { name: "AKIND", default: () => "0" })
  akind: number;

  @Column("float", {
    name: "FUELQTY",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  fuelqty: number | null;
}
