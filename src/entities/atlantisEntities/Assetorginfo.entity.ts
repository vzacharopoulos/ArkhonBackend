import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asset } from "./Asset.entity";
import { Department } from "./Department.entity";
import { Branch } from "./Branch.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5604", ["id"], { unique: true })
@Entity("ASSETORGINFO", { schema: "dbo" })
export class Assetorginfo {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("float", { name: "QTY", precision: 53 })
  qty: number;

  @Column("varchar", { name: "SN", nullable: true, length: 50 })
  sn: string | null;

  @Column("varchar", { name: "LOCATION", nullable: true, length: 255 })
  location: string | null;

  @Column("datetime", { name: "AOIDATE", nullable: true })
  aoidate: Date | null;

  @ManyToOne(() => Asset, (asset) => asset.assetorginfos, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ASTID", referencedColumnName: "id" }])
  ast: Asset;

  @ManyToOne(() => Department, (department) => department.assetorginfos)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DPTID", referencedColumnName: "codeid" },
  ])
  department: Department;

  @ManyToOne(() => Branch, (branch) => branch.assetorginfos)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "BRAID", referencedColumnName: "codeid" },
  ])
  branch: Branch;
}
