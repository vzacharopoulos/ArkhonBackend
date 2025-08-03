import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("UNI_5384", ["id"], { unique: true })
@ObjectType()
@Entity("CUSTOM", { schema: "dbo" })
export class Custom {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("smallint", { name: "DOMAINKIND" })
  domainkind: number;

  @Column("smallint", { name: "DATAKIND" })
  datakind: number;

  @Column("int", { name: "USERID", nullable: true })
  userid: number | null;

  @Column("int", { name: "GROUPID", nullable: true })
  groupid: number | null;

  @Column("varchar", { name: "DATANAME", nullable: true, length: 100 })
  dataname: string | null;



  @Column("int", { name: "EXTRADATAKIND", nullable: true })
  extradatakind: number | null;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("varchar", { name: "DATADESCR", nullable: true, length: 200 })
  datadescr: string | null;

  @Column("int", { name: "EXTRADOMAINKIND", nullable: true })
  extradomainkind: number | null;

  @Column("int", { name: "CUSTOMID", nullable: true })
  customid: number | null;

  @Column("varchar", { name: "OBJECTNAME", nullable: true, length: 100 })
  objectname: string | null;


}
