import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_1460", ["cstinfo", "csttype", "cstname"], { unique: true })
@ObjectType()
@Entity("CSTINFO", { schema: "dbo" })
export class Cstinfo {
  @Column("int", { primary: true, name: "CSTINFO" })
  cstinfo: number;

  @Column("int", { primary: true, name: "CSTTYPE" })
  csttype: number;

  @Column("varchar", { primary: true, name: "CSTNAME", length: 100 })
  cstname: string;

  @Column("varchar", { name: "NAME", length: 100 })
  name: string;

  @Column("int", { name: "SODEFAULT", nullable: true })
  sodefault: number | null;

  @Column("varchar", { name: "SODATA", nullable: true })
  sodata: string | null;

  @Column("varchar", { name: "UPDUSERNAME", nullable: true, length: 30 })
  updusername: string | null;

  @Column("datetime", { name: "SOUPDDATE", nullable: true })
  soupddate: Date | null;

  @Column("varchar", { name: "CSTGEN", nullable: true })
  cstgen: string | null;

  @Column("int", { name: "DEFCOMPANY", nullable: true })
  defcompany: number | null;

  @Column("int", { name: "SOQV", nullable: true })
  soqv: number | null;

  @Column("varchar", { name: "SOPKG", nullable: true, length: 32 })
  sopkg: string | null;

  @Column("int", { name: "SOTYPE", nullable: true })
  sotype: number | null;

  @Column("int", { name: "SOHIDDEN", nullable: true })
  sohidden: number | null;

  @Column("int", { name: "SOMODE", nullable: true })
  somode: number | null;
}
