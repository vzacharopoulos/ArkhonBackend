import { Field } from "@nestjs/graphql";
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

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "CATEGORY", nullable: true })
  category: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ATYPE", nullable: true })
  atype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "MASTERID", nullable: true })
  masterid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NAME", nullable: true, length: 255 })
  name: string | null;


  @Field({ nullable: true })
  @Column("int", { name: "ITEMINDEX", nullable: true })
  itemindex: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "SMFRAMECLASS", nullable: true, length: 255 })
  smframeclass: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "SMREPORTNAME", nullable: true, length: 255 })
  smreportname: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "USRID", nullable: true })
  usrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GRPID", nullable: true })
  grpid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "REPORTID", nullable: true })
  reportid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "KIND", default: () => "(0)" })
  kind: number;
}
