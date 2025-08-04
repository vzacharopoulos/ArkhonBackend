import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ITECOLOR_PK", ["iteid", "comid", "colorcode"], { unique: true })
@ObjectType()
@Entity("KEF_ITECOLOR", { schema: "dbo" })
export class KefItecolor {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "COLORCODE", length: 15 })
  colorcode: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COLORDESCR", nullable: true, length: 100 })
  colordescr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ORDERNUM", nullable: true })
  ordernum: number | null;
}
