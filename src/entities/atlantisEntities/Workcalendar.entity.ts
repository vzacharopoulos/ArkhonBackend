import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_10", ["comid", "braid", "fyeid", "teccid"], { unique: true })
@ObjectType()
@Entity("WORKCALENDAR", { schema: "dbo" })
export class Workcalendar {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "BRAID", default: () => "0" })
  braid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "WORKPLAN", nullable: true, length: 255 })
  workplan: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TECID", nullable: true })
  tecid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISTECHNICAL", default: () => "0" })
  istechnical: number;


  @Field({ nullable: true })
  @Column("int", { primary: true, name: "TECCID", default: () => "0" })
  teccid: number;
}
