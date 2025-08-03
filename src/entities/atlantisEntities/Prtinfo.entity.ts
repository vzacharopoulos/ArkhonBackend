import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_5364", ["domaintype", "id"], { unique: true })
@Index("UNI_5388", ["id"], { unique: true })
@Index("UNIX_1068", ["id"], {})
@ObjectType()
@Entity("PRTINFO", { schema: "dbo" })
export class Prtinfo {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("smallint", { name: "CATEGORY", nullable: true })
  category: number | null;

  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Column("int", { name: "MASTERID", nullable: true })
  masterid: number | null;

  @Column("varchar", { name: "NAME", nullable: true, length: 255 })
  name: string | null;


  @Column("int", { name: "ITEMINDEX", nullable: true })
  itemindex: number | null;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("varchar", { name: "SMFRAMECLASS", nullable: true, length: 255 })
  smframeclass: string | null;

  @Column("varchar", { name: "SMREPORTNAME", nullable: true, length: 255 })
  smreportname: string | null;

  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Column("int", { name: "GRPID", nullable: true })
  grpid: number | null;

  @Column("int", { name: "REPORTID", nullable: true })
  reportid: number | null;

  @Column("int", { name: "KIND", default: () => "(0)" })
  kind: number;
}
